import React from 'react';
import css from './addlistform.module.css';
import nextId from 'react-id-generator';

class AddListForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			tasksQty: [''],
		}
	}

	handleClick = (e) => {
		e.preventDefault()
		const { tasksQty } = this.state

		this.setState(
			{ tasksQty: [...tasksQty, ''] }
		)
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { addTask } = this.props;
		const taskContent = [...document.querySelectorAll('form > div > input')].map((item) => {
			return {
				id: nextId(),
				content: item.value,
				completed: false,
			}
		})

		addTask(
			{
				title: document.querySelector('#cardTitle').value,
				items: taskContent
			}
		)

		this.setState(
			{ tasksQty: [''] }
		)
		document.querySelector('form').reset()
	}

	render() {
		const { tasksQty } = this.state
		return (
			<form className={css.form} onSubmit={this.handleSubmit} >
				<label htmlFor='cardTitle'>Card title</label>
				<input id='cardTitle' type='text'></input>
				<h3>Tasks:</h3>
				{
					tasksQty.map((item, index) => {
						return (
							<div key={index} className={css.tasks}>
								<input className={css.input_task} type='text'></input>
								<button className={css.add_input} onClick={this.handleClick}>+</button>
							</div>
						)
					})
				}
				<button type='submit' className={css.button}>Add</button>
			</form>
		)
	}
}

export default AddListForm;