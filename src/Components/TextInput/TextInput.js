import React from 'react';
import css from './textinput.module.css';

class TextInput extends React.Component {
	render() {
		const { id, className } = this.props;

		return (
			<>
				<input type='text' autoComplete='off' id={id} className={css[className]}></input>
			</>
		)
	}
}

export default TextInput;