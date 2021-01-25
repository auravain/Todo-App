import React, { Component } from 'react';
import TodoList from './TodoList';

export class Main extends Component {
	render() {
		return (
			<section className="main">
				<input className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>

				<ul className="todo-list">
					<TodoList todoList={this.props.todoList} removeTodoItem={this.props.removeTodoItem} deactiveTodoItem={this.props.deactiveTodoItem}/>
				</ul>
			</section>
		);
	}
}

export default Main;
