import React from 'react';
import css from './header.module.css';
import Button from '../Button';

function Header({ loggedUser }) {
	return (
		<>
			<header className={css.header}>
				<div className={css.container}>
					<div className={css.logo}>ToDo</div>
					<Button type={'button'} className={'btnLogin'} className2={'btnTransparent'} label={loggedUser ? 'Log out' : 'Log in'} />
				</div>
			</header>
		</>
	)
}

export default Header;