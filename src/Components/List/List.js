import React from 'react';
import css from './list.module.css';
import Card from '../Card';

function List({ todos, loggedUser, modifiedTime, deleteTask }) {
	const userTodos = todos.filter(task => task.userId === loggedUser);

	return (
		<div className={css.cards}>
			{userTodos.map((todo) => {
				return (
					<Card key={todo.title} todo={todo} modifiedTime={modifiedTime} deleteTask={deleteTask} />
				)
			})}
		</div>
	)
}

export default List;