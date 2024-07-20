import { Bodies } from "matter-js";

interface Block {
	width: number;
	height: number;
	radius: number;
}

const blocks: Block[] = [
	{ width: 193, height: 92, radius: 40 },
	{ width: 241, height: 92, radius: 40 },
	{ width: 216, height: 92, radius: 40 },
	{ width: 322, height: 92, radius: 40 },
	{ width: 378, height: 92, radius: 40 },
	{ width: 163, height: 92, radius: 40 },
	{ width: 263, height: 92, radius: 40 },
	{ width: 153, height: 92, radius: 40 },
	{ width: 331, height: 92, radius: 40 },
	{ width: 236, height: 92, radius: 40 },
	{ width: 244, height: 92, radius: 40 },
	{ width: 263, height: 92, radius: 40 },
	{ width: 163, height: 92, radius: 40 },
	{ width: 331, height: 92, radius: 40 },
	{ width: 153, height: 92, radius: 40 },
	{ width: 322, height: 92, radius: 40 },
	{ width: 236, height: 92, radius: 40 },
	{ width: 224, height: 92, radius: 40 },
	{ width: 263, height: 92, radius: 40 },
	{ width: 378, height: 92, radius: 40 },
];

function makeRandomColor() {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	return `rgb(${r},${g},${b})`;
}

const RoundedBlocks = blocks.map((block) => {
	const blockBody = Bodies.rectangle(0, 0, block.width, block.height, {
		render: {
			fillStyle: makeRandomColor(),
		},
		chamfer: {
			radius: block.radius,
		},
		label: "block",
	});

	return blockBody;
});

export default RoundedBlocks;
