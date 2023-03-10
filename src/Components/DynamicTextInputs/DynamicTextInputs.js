import React from 'react';
import css from './dynamictextinputs.module.css';
import Button from '../Button';
import TextInput from '../TextInput';

function DynamicTextInputs({ tasksQty, handleClick }) {
	return (
		<>
			{tasksQty.map((item, index) => {
				return (
					<ul key={index} className={css.tasks}>
						<li>
							<TextInput className={'textInput'} />
							<Button type={'button'} className={'btnTransparentS'} onClick={handleClick} label={'+'} />
						</li>
					</ul>
				)
			})}
		</>
	)
}

export default DynamicTextInputs;