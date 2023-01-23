import React from 'react';
import css from './card.module.css';
import ListItem from '../ListItem';

class Card extends React.Component {
	render() {
		const { todo } = this.props;

		return (
			<div className={css.card}>
				<h2>{todo.title}</h2>
				<ul>
					{
						todo.items.map(item => {
							return (<ListItem key={item.id} item={item} />)
						})
					}
				</ul>
				<span className={css.date}>Adden on: {todo.time}</span>
			</div>
		)
	}
}

export default Card;