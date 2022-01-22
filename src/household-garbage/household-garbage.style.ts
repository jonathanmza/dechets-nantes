import { css } from 'lit';

export const styles = css`
	.column {
		display: flex;
		flex-direction: column;
	}

	.column-gap {
		gap: 25px;
	}

	.font {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
		color: gray;
		font-size: 0.975rem;
	}

	.card {
		border-radius: 15px;
		box-shadow: 1px 1px 6px -4px rgba(0, 0, 0, 0.62);
		background-color: white;
		padding: 12px;
		max-width: 80vw;
	}

	.h4-title {
		margin-top: 0;
	}
`;
