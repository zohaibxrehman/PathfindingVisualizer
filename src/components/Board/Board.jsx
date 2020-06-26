import React, { Component } from 'react';
import Node from '../Node/Node';

export class Board extends Component {
	render() {
		const { nodes, onMouseDown, onMouseEnter, onMouseUp } = this.props;
		return (
			<div style={divStyle}>
				<table style={tableStyle}>
					<tbody>
						{nodes.map((rowNodes, rowId) => {
							return (
								<tr key={rowId}>
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
const divStyle = {
	padding: '30px',
	backgroundColor: 'lightGray',
	height: '815px',
	float: 'left'
};

const tableStyle = {
	whiteSpace: 'nowrap', // makes table unbreakable
	display: 'inline block',
	padding: '0px',
	margin: '0px'
};

export default Board;
