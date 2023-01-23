import React from 'react';
import css from './app.module.css';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import mock from '../../server-response-mock'

class App extends React.Component {
	render() {
		return <div className={css.app}>
			<Header loggedUser={mock.activeUserId} />
			<Main loggedUser={mock.activeUserId} users={mock.users} todos={mock.todos} />
			<Footer />
		</div>

	}
}

export default App;
