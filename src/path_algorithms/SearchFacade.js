import { breadthFirstSearch } from './breadthFirstSearch';

export class SearchFacade {
	constructor(start, end, nodes) {
		this.start = start;
		this.end = end;
		this.nodes = nodes;
	}

	breadthFirstSearch() {
		return breadthFirstSearch(this.start, this.end, this.nodes);
	}
}
