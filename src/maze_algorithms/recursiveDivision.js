export const recursiveDivision = (nodes, startX, startY, endX, endY, axis) => {
	const drawnNodes1 = drawDungeon(nodes, endX, endY);
	const drawnNodes2 = divide(nodes, startX + 2, startY + 2, endX - 2, endY - 2, axis);
	const drawnNodes = [ ...drawnNodes1, ...drawnNodes2 ];
	return { newNodes: nodes, drawnNodes };
};

const drawDungeon = (nodes, endX, endY) => {
	let drawnNodes = [];
	for (let x = 0; x <= endX; x++) {
		nodes[x][0].type = 'wall';
		nodes[x][endY].type = 'wall';
		drawnNodes.push(nodes[x][0]);
		drawnNodes.push(nodes[x][endY]);
	}

	for (let y = 0; y <= endY; y++) {
		nodes[0][y].type = 'wall';
		nodes[endX][y].type = 'wall';
		drawnNodes.push(nodes[0][y]);
		drawnNodes.push(nodes[endX][y]);
	}

	return drawnNodes;
};

const divide = (nodes, startX, startY, endX, endY, axis) => {
	let drawnNodes = [];
	let drawnNodes1;
	let drawnNodes2;

	if (endX < startX || endY < startY) {
		return [];
	} else if (axis === 'horizontal') {
		let alternateX = [];
		// avoids consecutive walls
		for (let x = startX; x <= endX; x += 2) {
			alternateX.push(x);
		}

		let alternateY = [];
		for (let y = startY - 1; y <= endY + 1; y += 2) {
			alternateY.push(y);
		}

		let wallX = alternateX[Math.floor(Math.random() * alternateX.length)];
		let passageY = alternateY[Math.floor(Math.random() * alternateY.length)];

		for (var y = startY - 1; y <= endY + 1; y++) {
			if (y !== passageY && nodes[wallX][y].type !== 'start' && nodes[wallX][y].type !== 'end') {
				nodes[wallX][y].type = 'wall'; // change
				drawnNodes.push(nodes[wallX][y]);
			}
		}

		if (wallX - startX - 2 > endY - startY) {
			drawnNodes1 = divide(nodes, startX, startY, wallX - 2, endY, 'horizontal');
		} else {
			drawnNodes1 = divide(nodes, startX, startY, wallX - 2, endY, 'vertical');
		}
		if (endX - wallX - 2 > endY - startY) {
			drawnNodes2 = divide(nodes, wallX + 2, startY, endX, endY, 'horizontal');
		} else {
			drawnNodes2 = divide(nodes, wallX + 2, startY, endX, endY, 'vertical');
		}
		return [ ...drawnNodes, ...drawnNodes1, ...drawnNodes2 ];
	} else {
		let alternateX = [];
		for (let x = startX - 1; x <= endX + 1; x += 2) {
			alternateX.push(x);
		}

		let alternateY = [];
		for (let y = startY; y <= endY; y += 2) {
			alternateY.push(y);
		}

		let wallY = alternateY[Math.floor(Math.random() * alternateY.length)];
		let passageX = alternateX[Math.floor(Math.random() * alternateX.length)];

		for (var x = startX - 1; x <= endX + 1; x++) {
			if (x !== passageX && nodes[x][wallY].type !== 'start' && nodes[x][wallY].type !== 'end') {
				nodes[x][wallY].type = 'wall';
				drawnNodes.push(nodes[x][wallY]);
			}
		}

		if (endX - startX > wallY - startY - 2) {
			drawnNodes1 = divide(nodes, startX, startY, endX, wallY - 2, 'horizontal');
		} else {
			drawnNodes1 = divide(nodes, startX, startY, endX, wallY - 2, 'vertical');
		}
		if (endX - startX > endY - wallY - 2) {
			drawnNodes2 = divide(nodes, startX, wallY + 2, endX, endY, 'horizontal');
		} else {
			drawnNodes2 = divide(nodes, startX, wallY + 2, endX, endY, 'vertical');
		}
		return [ ...drawnNodes, ...drawnNodes1, ...drawnNodes2 ];
	}
};
