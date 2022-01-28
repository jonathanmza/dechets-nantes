import { css } from 'lit';

export const styles = css`
	::placeholder {
		color: white;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
	}

	.flex-gap-50px {
		gap: 50px;
	}

	.flex-gap-25px {
		gap: 25px;
	}

	.no-border {
		border-style: none;
	}

	.font-size {
		font-size: 0.975rem;
	}

	.text-center {
		text-align: center;
	}

	.p-15px {
		padding: 15px;
	}

	.h-10vh {
		height: 10vh;
	}

	.sticky {
		top: 0;
		position: -webkit-sticky;
		position: -moz-sticky;
		position: -o-sticky;
		position: -ms-sticky;
		position: sticky;
	}

	.h-25vh {
		height: 25vh;
	}

	.items-center {
		align-items: center;
		justify-content: center;
	}

	.w-80vw {
		width: 80vw;
	}

	.w-100vw {
		width: 100vw;
	}

	.color-gray {
		color: white;
	}

	.bd-radius {
		border-radius: 15px;
	}

	.input-bg-color {
		background-color: var(--bg-input-color);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
	}

	.outline:focus {
		outline-style: none;
	}
`;
