import React from 'react';
import css from './header.module.css'

class Header extends React.Component {
	render() {
		const { loggedUser } = this.props;
		return (
			<>
				<header className={css.header}>
					<div className={css.container}>
						<div className={css.logo}>ToDo</div>
						<button className={css.button}>{loggedUser ? 'Log out' : 'Log in'}</button>
					</div>
				</header>
			</>
		)

	}
}

export default Header;