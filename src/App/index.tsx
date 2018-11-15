/** Libraries */
import React from 'react';

/** Components */
import Header from '../components/Header';
import Content from '../components/Content';

/** Styles */
import './index.scss';

class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Content />
			</>
		);
	}
}

export default App;
