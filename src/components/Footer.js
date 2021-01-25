import React, { Component } from 'react';

export class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{this.props.todoLength} </strong>
					items left
				</span>

				<ul className="filters">
					<li>
						<button onClick={this.props.filterAll} className="selected">
							All
						</button>
					</li>
					<li>
						<button onClick={this.props.filterActive}>Active</button>
					</li>
					<li>
						<button onClick={this.props.filterCompleted}>Completed</button>
					</li>
				</ul>

				<button className="clear-completed" onClick={this.props.clearItems}>
					Clear completed
				</button>
			</footer>
		);
	}
}

export default Footer;
