import { css } from 'lit';

export const styles = css`
	::placeholder {
		color: gray;
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

	.w-80vw {
		width: 80vw;
	}

	.color-gray {
		color: gray;
	}

	.bd-radius {
		border-radius: 15px;
		box-shadow: 1px 1px 6px -4px rgba(0, 0, 0, 0.62);
	}

	.outline:focus {
		outline-style: none;
	}

	.self-center {
		align-self: center;
	}
`;
