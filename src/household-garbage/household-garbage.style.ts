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
		color: white;
		font-size: 0.975rem;
	}

	.card {
		border-radius: 15px;
		box-shadow:  rgb(0 0 0 / 62%) -2px 2px 9px -3px;
		background-color: rgb(241 175 154 / 17%);
		padding: 12px;
		width: 80vw;
	}

	.h4-title {
		margin-top: 0;
	}
`;
