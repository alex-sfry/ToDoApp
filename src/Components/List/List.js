import React from 'react';
import css from './list.module.css';
import Card from '../Card';
import nextId from 'react-id-generator';

class List extends React.Component {
	render() {
		const { todos, loggedUser } = this.props;
		const userTodos = todos.filter(task => task.userId === loggedUser);

		return (
			<div className={css.cards}>
				{
					userTodos.map(todo => {
						return (
							<Card key={nextId()} todo={todo} />
						)
					})
				}
			</div>
		)
	}
}

export default List;