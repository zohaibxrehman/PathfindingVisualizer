import { recursiveDivision } from './recursiveDivision';
import { simpleTerrain } from './simpleTerrain';
import { flappyBirdGrid } from './flappyBirdGrid';

export class MazeFacade {
	constructor(nodes, startX, startY, endX, endY, axis) {
		this.nodes = nodes;
		this.startX = startX;
		this.startY = startY;
		this.endX = endX;
		this.endY = endY;
		this.axis = axis;
	}

	recursiveDivision() {
		return recursiveDivision(this.nodes, this.startX, this.startY, this.endX, this.endY, this.axis);
	}

	simpleTerrain() {
		return simpleTerrain(this.nodes, this.endX, this.endY);
	}

	flappyBirdGrid() {
		return flappyBirdGrid(this.nodes, this.endX, this.endY);
	}
}
