import React from 'react';
import css from './main.module.css';
import List from '../List';
import AddListForm from '../AddListForm';

class Main extends React.Component {
	constructor(props) {
		super(props)
		const { todos } = this.props

		this.state = {
			isFormOpen: false,
			todos: todos
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

		this.setState({
			todos: [...this.state.todos, newTask]
		}
		)
	}

	render() {
		const { loggedUser, users } = this.props;
		const userName = loggedUser ? users.find(user => user.id === loggedUser).name : undefined;
		const { isFormOpen, todos } = this.state;

		return (
			<>
				<main className={css.main}>
					<div className={css.container}>
						{
							loggedUser ? (
								<>
									<h1>Welcome, {userName}</h1>
									<button className={css.button} onClick={this.handleClick}>
										{isFormOpen ? 'Close' : 'Add list'}</button>
									{isFormOpen && <AddListForm addTask={this.addTask} />}
									<List loggedUser={loggedUser} todos={todos} />
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