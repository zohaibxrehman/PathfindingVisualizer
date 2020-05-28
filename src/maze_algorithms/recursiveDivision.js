export const recursiveDivision = (nodes, startX, startY, endX, endY, axis) => {
	let drawnNodes1 = drawDungeon(nodes, endX, endY);
	let drawnNodes2 = divide(nodes, startX + 2, startY + 2, endX - 2, endY - 2, axis);
	let drawnNodes = [ ...drawnNodes1, ...drawnNodes2 ];
	console.log(drawnNodes2);
	return { newNodes: nodes, drawnNodes };
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
				console.log(`@hor: (${wallX}, ${y})`);
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
	} else if (axis === 'vertical') {
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
				console.log(`@ver: (${x}, ${wallY})`);
				nodes[x][wallY].type = 'wall'; // change
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

// export const recursiveDivision = (nodes, startX, startY, endX, endY, orientation) => {
// 	let drawnNodes = [];
// 	const dimX = endX - startX + 1;
// 	const dimY = endY - startY + 1;

// 	let wallX;
// 	let wallY;
// 	let passX;
// 	let passY;

// 	if (dimX < 2 || dimY < 2) {
// 		return { newNodes: nodes, drawnNodes };
// 	} else if (orientation === 'horizontal') {
// 		let evenX = [];
// 		let oddY = [];
// 		const evenStart = startX % 2 === 0 ? startX : startX + 1;
// 		for (let i = evenStart; i <= endX; i += 2) {
// 			evenX.push(i);
// 		}

// 		const oddStart = startY % 2 !== 0 ? startY : startY + 1;
// 		for (let i = oddStart; i <= endY; i += 2) {
// 			oddY.push(i);
// 		}

// 		wallX = evenX[getRandomInt(0, evenX.length - 1)];
// 		console.log('@hor', evenX, wallX);
// 		passY = oddY[getRandomInt(0, oddY.length - 1)];

// for (var y = startY; y <= endY; y++) {
// 	if (y !== passY) {
// 		console.log(`@hor: (${wallX}, ${y})`);
// 		nodes[wallX][y].type = 'wall'; // change
// 		drawnNodes.push(nodes[wallX][y]);
// 	}
// }

// 		const { drawnNodes: newNodesDrawn1 } = recursiveDivision(
// 			nodes,
// 			startX,
// 			startY,
// 			wallX - 1,
// 			endY - 1,
// 			chooseOrientation(dimX, dimY, orientation)
// 		);
// 		const { drawnNodes: newNodesDrawn2 } = recursiveDivision(
// 			nodes,
// 			wallX + 1,
// 			startY + 1,
// 			endX,
// 			endY,
// 			chooseOrientation(dimX, dimY, orientation)
// 		);
// 		drawnNodes = drawnNodes.concat([ ...newNodesDrawn1, ...newNodesDrawn2 ]);
// 		return { newNodes: nodes, drawnNodes };
// 	} else {
// 		let oddX = [];
// 		let evenY = [];

// 		const oddStart = startX % 2 !== 0 ? startX : startX + 1;
// 		for (let i = oddStart; i <= endX; i += 2) {
// 			oddX.push(i);
// 		}

// 		const evenStart = startY % 2 === 0 ? startY : startY + 1;
// 		for (let i = evenStart; i <= endY; i += 2) {
// 			evenY.push(i);
// 		}

// 		wallY = evenY[getRandomInt(0, evenY.length - 1)];
// 		// console.log('ver', oddY, wallY);
// 		console.log('ver--', startY, endY);
// 		passX = oddX[getRandomInt(0, oddX.length - 1)];

// 		for (var x = startX; x <= endX; x++) {
// 			if (x !== passX) {
// 				console.log(`@ver: (${x}, ${wallY})`);
// 				nodes[x][wallY].type = 'wall'; // change
// 				drawnNodes.push(nodes[x][wallY]);
// 			}
// 		}
// 		const { drawnNodes: newNodesDrawn1 } = recursiveDivision(
// 			nodes,
// 			startX,
// 			startY,
// 			endX - 1,
// 			wallY - 1,
// 			chooseOrientation(dimX, dimY, orientation)
// 		);
// 		const { drawnNodes: newNodesDrawn2 } = recursiveDivision(
// 			nodes,
// 			startX + 1,
// 			wallY + 1,
// 			endX,
// 			endY,
// 			chooseOrientation(dimX, dimY, orientation)
// 		);
// 		drawnNodes = drawnNodes.concat([ ...newNodesDrawn1, ...newNodesDrawn2 ]);
// 		return { newNodes: nodes, drawnNodes };
// 	}
// };

// const getRandomInt = (min, max) => {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// };

// const chooseOrientation = (width, height, orientation) => {
// 	if (width > height) {
// 		return 'horizontal';
// 	} else if (width < height) {
// 		return 'vertical';
// 	} else if (orientation === 'horizontal') {
// 		return 'vertical';
// 	} else {
// 		return 'horizontal';
// 	}
// };
