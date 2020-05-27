export const simpleTerrain = (nodes) => {
	let drawnNodes = [];
	nodes.forEach((row) => {
		row.forEach((node) => {
			if (Math.floor(Math.random() * 100 + 1) < 33 && node.type !== 'start' && node.type !== 'end') {
				node.type = 'wall';
				drawnNodes.push(node);
			}
		});
	});
	return { nodes, drawnNodes };
};
