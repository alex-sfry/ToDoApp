import React from 'react';
import css from './footer.module.css'

function Footer() {
	return (
		<>
			<footer className={css.footer}>
				<div className={css.container}>
					<a href='mailto:feedback@whatever.com'>Contact us</a>
				</div>
			</footer>
		</>
	)
}

export default Footer;