import React from 'react';
import css from './addlistform.module.css';
import nextId from 'react-id-generator';
import DynamicTextInputs from '../DynamicTextInputs'
import Button from '../Button';
import TextInput from '../TextInput';

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
		// validation for unique, non empty title and at least 1 input filled
		const isValidated = () => {
			const { userTodos } = this.props;
			const titles = userTodos.map((todo) => todo.title.trim());
			const newTitle = document.querySelector('#newTitle').value.trim();
			const nonEmptyValues = [...document.querySelectorAll(`.${css.form} > ul > li > input`)].map(item => item.value).filter((item) => item !== '');
			let unique = true;

			titles.forEach((title) => {
				if (title === newTitle) unique = false;
			})

			if (newTitle !== '' && nonEmptyValues.length > 0 && unique) {
				return true;
			}
			if (!unique && nonEmptyValues.length === 0) {
				alert('Title must be unique. You must fill at least 1 task field');
				return false;
			}
			if (!unique) {
				alert('Title must be unique.');
				return false;
			}
			alert('You must fill at least Title and 1 task field');
			return false;
		}

		if (!isValidated()) return;
		//get non empty input values
		const nonEmptyValues = [...document.querySelectorAll(`.${css.form} > ul > li > input`)].filter((item) => { return item.value !== '' })
		//create object with task info in specific format
		const taskContent = nonEmptyValues.map((item) => {
			return {
				id: nextId(),
				content: item.value,
				completed: false,
			}
		})

		const { addTask } = this.props;
		
		addTask(
			{
				title: document.querySelector('#newTitle').value,
				items: taskContent
			}
		)

		this.setState(
			{ tasksQty: [''] }
		)
		document.querySelector('form').reset()
	}

	render() {
		const { tasksQty } = this.state;

		return (
			<form className={css.form} onSubmit={this.handleSubmit}>
				<h3>Card title</h3>
				<TextInput id={'newTitle'} className={'textInput'} />
				<h3>Tasks:</h3>
				<DynamicTextInputs tasksQty={tasksQty} handleClick={this.handleClick} />
				<Button type={'submit'} className={'btnTransparentM'} label={'Add'} />
			</form>
		)
	}
}

export default AddListForm;