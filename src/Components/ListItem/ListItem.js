import React from 'react';
import css from './listitem.module.css';

class ListItem extends React.Component {
	constructor(props) {
		super(props)
		const { item } = this.props;

		this.state = {
			checked: item.completed,
			modifiedTime: null,
		}
	}

	handleChange = () => {
		const date = new Date()
		const { modifiedTask } = this.props;
		this.setState({
			checked: !this.state.checked,
			modifiedTime: date.toLocaleString()
		})
		modifiedTask(date.toLocaleString())
	}

	render() {
		const { item } = this.props;
		const { checked } = this.state;
		return (
			<>
				<li className={css.li}>
					<input type='checkbox' defaultChecked={checked} onChange={this.handleChange}></input>
					<span>{checked ? (<del>{item.content}</del>) : (<span>{item.content}</span>)}</span>
				</li>
			</>
		)
	}
}

export default ListItem;