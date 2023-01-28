import React from 'react';
import css from './main.module.css';
import List from '../List';
import AddListForm from '../AddListForm';
import Button from '../Button';

class Main extends React.Component {
	constructor(props) {
		super(props)
		const { todos } = this.props

		this.state = {
			isFormOpen: false,
			todos: todos,
			modifiedTime: null,
			title: ''
		}
	}

	handleClick = () => {

		this.setState(
			{ isFormOpen: !this.state.isFormOpen }

		)
	}

	addTask = (data) => {
		const date = new Date()
		const newTask = {
			userId: this.props.loggedUser,
			title: data.title,
			items: data.items,
			time: date.toLocaleString()
		}
		const { todos } = this.state

		this.setState({ todos: [...todos, newTask] })
	}

	render() {
		const { loggedUser, users } = this.props;
		const userName = loggedUser ? users.find(user => user.id === loggedUser).name : undefined;
		const { isFormOpen, todos } = this.state;
		const userTodos = todos.filter(task => task.userId === loggedUser);

		return (
			<>
				<main className={css.main}>
					<div className={css.container}>
						{
							loggedUser ? (
								<>
									<h1>Welcome, {userName}</h1>
									<Button type={'button'} className={'btnTransparentM'} onClick={this.handleClick} label={isFormOpen ? 'Close' : 'Add list'} />
									{isFormOpen && <AddListForm userTodos={userTodos} addTask={this.addTask} />}
									<List loggedUser={loggedUser} todos={todos} modifiedTime={this.modifiedTime} />
								</>
							) :
								<>
									<h1>ToDo App</h1>
									<p>Please, log in</p>
								</>
						}
					</div>
				</main>
			</>
		)
	}
}

export default Main;