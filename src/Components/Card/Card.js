import React from 'react';
import css from './card.module.css';
import ListItem from '../ListItem';
import nextId from 'react-id-generator'; // for Id genration

class Card extends React.Component {
	constructor(props) {
		super(props)
		const { todo } = this.props;
		const cardId = nextId();
		const defaultCompleted = todo.items.filter((item) => item.completed).length

		this.state = {
			cardId: cardId,
			modifiedTime: null,
			taskQty: todo.items.length,
			completedQty: defaultCompleted
		}
	}
	// sets time and qty of completed tasks when checkbox is used
	modifiedTask = (data) => {
		const inputChecked = [...document.querySelectorAll(`#${this.state.cardId} input`)].filter((input) => { return input.checked })

		this.setState({
			modifiedTime: data,
			completedQty: inputChecked.length
		})
	}

	render() {
		const { todo } = this.props;
		const { modifiedTime, cardId, completedQty, taskQty } = this.state;

		return (
			<div id={cardId} className={css.card}>
				<div>
					<h2 className={css.cardTitle}>{todo.title}</h2>
					<ul>
						{todo.items.map((item) => {
							return (<ListItem key={item.id} item={item} title={todo.title} modifiedTask={this.modifiedTask} />)
						})}
					</ul>
				</div>
				<div className={css.status}>
					<p className={css.dateAdded}>added on: {todo.time}</p>
					<p className={css.dateModified}>modified on: {modifiedTime}</p>
					<p className={css.progress}>progress: {completedQty}/{taskQty} completed</p>
				</div>
			</div>
		)
	}
}

export default Card;