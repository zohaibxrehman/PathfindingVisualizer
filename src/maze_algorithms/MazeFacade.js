import { recursiveDivision } from './recursiveDivision';
import { simpleTerrain } from './simpleTerrain';
import { flappyBirdGrid } from './flappyBirdGrid';

export class MazeFacade {
	static recursiveDivision(nodes, startX, startY, endX, endY, axis) {
		return recursiveDivision(nodes, startX, startY, endX, endY, axis);
	}

	static simpleTerrain(nodes, endX, endY) {
		return simpleTerrain(nodes, endX, endY);
	}

	static flappyBirdGrid(nodes, endX, endY) {
		return flappyBirdGrid(nodes, endX, endY);
	}
}
