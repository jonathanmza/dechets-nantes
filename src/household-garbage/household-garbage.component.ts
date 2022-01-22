import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators';
import { when } from 'lit/directives/when';
import { GarbageAdvice } from '../model/garbage-advice.model';
import { styles } from './household-garbage.style';

@customElement('household-garbage')
class HouseholdGarbageComponent extends LitElement {
	@property({ type: Object })
	public garbage: GarbageAdvice | undefined;

	static styles = styles;

	render() {
		return html`
			<div class="column card font">
				<h4 class="h4-title">${this.garbage?.description}</h4>

				<div class="column column-gap">
					${this.garbage?.wastePlaces
						.filter((v) => !!v)
						.map(
							(garbagePlace) =>
								html`
									<div>
										<span>👉</span>
										${garbagePlace}
									</div>
								`
						)}
					${when(
						this.garbage?.advice,
						() => html`<div>
							<span>💡</span>
							${this.garbage?.advice}
						</div>`
					)}
					${when(
						this.garbage?.comment,
						() => html`<div>
							<span>💬</span>
							${this.garbage?.comment}
						</div>`
					)}
				</div>
			</div>
		`;
	}
}
