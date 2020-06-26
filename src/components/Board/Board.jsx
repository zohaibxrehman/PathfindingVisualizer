import React, { Component } from 'react';
import Node from '../Node/Node';

import styles from './Board.module.css';

export class Board extends Component {
	render() {
		const { nodes, onMouseDown, onMouseEnter } = this.props;
		return (
			<div className={styles.tableWrapper}>
				<table className={styles.tableStyle}>
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

export default Board;
