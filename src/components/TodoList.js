import React, { Component } from 'react';

export class TodoList extends Component {
	render() {
		return (
			<>
				{this.props.todoList.map((todos, k) => (
					<li key={k} className={todos.active ? '' : 'completed'}>
						<div className="view">
							<input
								className="toggle"
								type="checkbox"
								onClick={() => this.props.deactiveTodoItem(todos.id)}
							/>
							<label>{todos.todo}</label>
							<button
								className="destroy"
								onClick={() => this.props.removeTodoItem(todos.id)}
							></button>
						</div>
					</li>
				))}
			</>
		);
	}
}

export default TodoList;
