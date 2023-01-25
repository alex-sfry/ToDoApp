import React from 'react';
import css from './addlistform.module.css';
import nextId from 'react-id-generator';
import DynamicTextInputs from '../DynamicTextInputs'

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
		
		const isValidated = () => {
			const inputContent = [...document.querySelectorAll(`.${css.form} > div > input`)].map(item => item.value)
			const nonEmptyValues = inputContent.filter((item) => item !== '')
			if (document.querySelector('#cardTitle').value !== '' && nonEmptyValues.length > 0) {
				return true
			} else return false
		}

		if (!isValidated()) {
			alert('You must fill at least Title and 1 task field')
			return
		}

		const { addTask } = this.props;
		const taskContent = [...document.querySelectorAll(`.${css.form} > div > input`)].map(item => {
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
			<form className={css.form} onSubmit={this.handleSubmit}>
				<h3>Card title</h3>
				<input id='cardTitle' type='text'></input>
				<h3>Tasks:</h3>
				<DynamicTextInputs tasksQty={tasksQty} handleClick={this.handleClick} />
				<button type='submit' className={css.button}>Add</button>
			</form>
		)
	}
}

export default AddListForm;