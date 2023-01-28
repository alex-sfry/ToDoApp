import React from 'react';
import css from './button.module.css';

class Button extends React.Component {
	render() {
		const { type, className, label, onClick } = this.props

		return (
			<>
				<button type={type} className={css[className]} onClick={onClick}>{label}</button>
			</>
		)
	}
}

export default Button;