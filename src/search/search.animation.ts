import { animate, fadeIn, flyBelow } from '@lit-labs/motion';

export const fadeInAnimation = animate({
	in: fadeIn,
	keyframeOptions: {
		duration: 1500,
	},
});

export const inOutAnimation = animate({
	in: fadeIn,
	out: flyBelow,
	keyframeOptions: {
		duration: 600,
	},
});
