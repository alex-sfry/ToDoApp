import React from 'react';
import css from './header.module.css';
import Button from '../Button';

class Header extends React.Component {
	render() {
		const { loggedUser } = this.props;
		return (
			<>
				<header className={css.header}>
					<div className={css.container}>
						<div className={css.logo}>ToDo</div>
						<Button type={'button'} className={'btnLogin'} label={loggedUser ? 'Log out' : 'Log in'} />
					</div>
				</header>
			</>
		)

	}
}

export default Header;