/** Libraries */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

/** Components */
import Home from '../Home';
import UserProfile from '../UserProfile';

class Content extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/user-profile/:userId' component={UserProfile} />
				<Redirect from='*' to='/' />
			</Switch>
		);
	}
}

export default Content;
