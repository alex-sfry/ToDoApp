import React from 'react';
import css from './addlistform.module.css';
import nextId from 'react-id-generator';

class AddListForm extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const { addTask } = this.props;
		const taskContent = document.querySelector('#listItems').value.split(',').map((item) => {
			return {
				id: nextId(),
				content: item.trim(),
				completed: false,
			}
		})

		addTask(
			{
				title: document.querySelector('#cardTitle').value,
				items: taskContent
			}
		)
	}

	render() {
		return (
			<form className={css.form} onSubmit={this.handleSubmit} >
				<label htmlFor='cardTitle'>Card title</label>
				<input id='cardTitle' type='text'></input>
				<label htmlFor='listItems'>Tasks</label>
				<textarea id='listItems'></textarea>
				<button type='submit' className={css.button}>Add</button>
			</form>
		)
	}
}

export default AddListForm;