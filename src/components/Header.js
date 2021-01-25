import React, { Component } from 'react';
import Title from './Title';

export class Header extends Component {
	render() {
		return (
			<>
				<header className="header">
					<Title />
					<form onSubmit={this.props.addItem}>
						<input
							className="new-todo"
							placeholder="What needs to be done?"
							name="todoitem"
							autoComplete="off"
							autoFocus
						/>
					</form>
				</header>
			</>
		);
	}
}

export default Header;
