import { animate, fadeIn, flyBelow } from '@lit-labs/motion';
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators';
import { when } from 'lit/directives/when';
import { fromEvent } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { GarbageAdvice } from '../model/garbage-advice.model';
import { styles } from '../search/search.style';
import { fadeInAnimation, inOutAnimation } from './search.animation';

@customElement('product-finder')
class SearchComponent extends LitElement {
	@state()
	private searchResults: GarbageAdvice[] = [];

	@state()
	private loading = false;

	static styles = styles;

	protected firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void {
		this.handleInputEvent();
	}

	render() {
		return html`
			<div class="flex-column flex-gap-50px">
				<div ${fadeInAnimation} class="flex-column sticky header-background w-100vw items-center h-25vh">
					<input
						class="font-size text-center p-15px h-4vh w-80vw no-border bd-radius color-gray outline"
						type="text"
						id="search"
						name="search"
						placeholder="Cherchez un déchet à jeter..." />
				</div>
				<div class="flex-column items-center flex-gap-10px">
					${when(this.loading, () => html`<span class="color-gray"> Je cherche... 🔍 </span>`)}
					${when(
						this.searchInputValue && !this.loading && !this.searchResults.length,
						() => html`<span class="color-gray"> Aïe ! Je n'ai rien trouvé 😬 </span>`
					)}
					${this.searchResults.map(
						(result) => html` <household-garbage .garbage=${result} ${inOutAnimation}}></household-garbage>`
					)}
				</div>
			</div>
		`;
	}

	private handleInputEvent() {
		fromEvent(this.shadowRoot?.getElementById('search'), 'keyup')
			.pipe(
				tap(() => (this.loading = true)),
				debounceTime(850),
				switchMap(() => this.fetchData()),
				tap(() => this.requestUpdate('searchResults'))
			)
			.subscribe();
	}

	private async fetchData() {
		const URL = `https://data.nantesmetropole.fr/api/records/1.0/search/?q=${this.searchInputValue}&rows=16&dataset=244400404_jeter-dechet-nantes-metropole&timezone=Europe%2FBerlin&lang=fr`;
		this.loading = true;
		this.searchResults = [];
		this.requestUpdate('searchResults');
		await fetch(URL, { method: 'GET' })
			.then((response) => response.json())
			.then((data) => data.records as Array<any>)
			.then((records) => records.flatMap((records) => records.fields))
			.then((data) => data.map((data) => this.toValueObject(data)))
			.then((mappedData) => {
				this.searchResults = this.searchInputValue ? [...mappedData] : [];
			})
			.finally(() => (this.loading = false));
	}

	private toValueObject(data: any) {
		return {
			description: data.description,
			comment: data.commentaire,
			wastePlaces: [data.reponse1, data.reponse2],
			advice: data.conseil_zero_dechet,
		} as GarbageAdvice;
	}

	get searchInputValue() {
		return (this.shadowRoot?.getElementById('search') as HTMLInputElement)?.value;
	}
}
