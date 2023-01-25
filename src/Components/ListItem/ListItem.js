import React from 'react';
import css from './listitem.module.css';

class ListItem extends React.Component {
	constructor(props) {
		super(props)
		const { item } = this.props;

		this.state = {
			checked: item.completed
		}
	}

	handleChange = () => {
		const { item } = this.props;
		item.completed = !item.completed
		this.setState(
			{ checked: item.completed }
		)
	}

	render() {
		const { item } = this.props;
		const { checked } = this.state;

		return (
			<>
				<li className={css.li}>
					<input name={item.id} type='checkbox' defaultChecked={checked} onChange={this.handleChange}></input>
					<label>{checked ? (<del>{item.content}</del>) : (<span>{item.content}</span>)}</label>
				</li>
			</>
		)
	}
}

export default ListItem;