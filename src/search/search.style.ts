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

	.flex-gap-10px {
		gap: 10px;
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

	.h-4vh {
		height: 4vh;
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

	.header-background {
		background: linear-gradient(5deg, #a770ef42, #fdb99b);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
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
		background-color: #00000014;
	}

	.outline:focus {
		outline-style: none;
	}
`;
