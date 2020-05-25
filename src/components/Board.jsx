import React, { Component } from 'react';
import Node from './Node';

export class Board extends Component {
	getStyle() {
		return {
			padding: '30px'
		};
	}

	render() {
		const { nodes, isMouseDown, onMouseDown, onMouseEnter, onMouseUp } = this.props;
		return (
			<div style={this.getStyle()}>
				<table>
					<tbody>
						{nodes.map((rowNodes, rowId) => {
							return (
								<tr key={rowId} style={rowStyle}>
									{rowNodes.map((node, nodeId) => {
										const { row, column, type } = node;
										return (
											<Node
												key={nodeId}
												row={row}
												column={column}
												type={type}
												onMouseDown={(row, column) => onMouseDown(row, column)}
												onMouseEnter={(row, column) => onMouseEnter(row, column)}
												onMouseUp={() => onMouseUp()}
												// this.handleClick = this.handleClick.bind(this);
											/>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

// Helper Functions:
const rowStyle = {
	whiteSpace: 'nowrap', // makes table unbreakable
	display: 'inline block',
	padding: '0px',
	margin: '0px'
};

export default Board;
