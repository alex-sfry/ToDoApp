import React from 'react';
import css from './textinput.module.css';

function TextInput({ id, className }) {
	return (
		<>
			<input type='text' autoComplete='off' id={id} className={css[className]}></input>
		</>
	)
}

export default TextInput;