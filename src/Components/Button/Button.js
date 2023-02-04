import React from 'react';
import css from './button.module.css';

function Button({ type, className, className2, label, onClick }) {
	return (
		<>
			<button type={type} className={[css[className], css[className2]].join(' ')} onClick={onClick}>{label}</button>
		</>
	)
}

export default Button;