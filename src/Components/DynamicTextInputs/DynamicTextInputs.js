import React from 'react';
import css from './dynamictextinputs.module.css';

class DynamicTextInputs extends React.Component {
	render() {
		const { tasksQty, handleClick } = this.props

		return (
			<>
				{
					tasksQty.map((item, index) => {
						return (
							<div key={index} className={css.tasks}>
								<input className={css.input_task} type='text'></input>
								<button className={css.add_input} onClick={handleClick}>+</button>
							</div>
						)
					})
				}
			</>
		)
	}
}

export default DynamicTextInputs;