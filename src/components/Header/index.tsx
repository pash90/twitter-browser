/** Libraries */
import React from 'react';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import { push } from 'connected-react-router';

/** Helpers */
import { searchTwitter } from '../../actions';
import store from '../../store';

/** Assets */
import search from '../../assets/search.svg';

/** Interfaces */
interface HeaderStateProps {
	query?: string;
	isSearching: boolean;
}

/** Styles */
import './index.scss';
import { NavLink } from 'react-router-dom';

class Header extends React.Component<{}, HeaderStateProps> {
	constructor(props: {}) {
		super(props);

		this.state = {
			isSearching: false
		};
	}

	updateQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value: query } = event.currentTarget;

		this.setState(prevState => ({
			query
		}));
	};

	onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.keyCode === 13) {
			this.performSearch();
		}
	};

	performSearch = () => {
		const { query } = this.state;

		searchTwitter(query as string);

		store.dispatch(push('/'));
	};

	toggleSearchBar = () =>
		this.setState(prevState => ({
			isSearching: !prevState.isSearching
		}));

	render() {
		const { query, isSearching } = this.state;

		return (
			<header>
				<Container>
					<Row>
						<Col xs={9} sm={6} className='section'>
							{isSearching ? (
								<div className='input' style={{ width: '100%' }}>
									<input
										autoFocus
										onChange={this.updateQuery}
										placeholder='Search Twitter'
										onKeyDown={this.onKeyPress}
									/>
								</div>
							) : (
								<h3>
									<NavLink to='/'>Twttr</NavLink>
								</h3>
							)}
						</Col>

						<Hidden xs>
							<Col sm={6} className='section'>
								<div className='input'>
									<input
										onChange={this.updateQuery}
										placeholder='Search Twitter'
										onKeyDown={this.onKeyPress}
									/>
									<button
										disabled={query ? (query.length > 0 ? false : true) : true}
										onClick={this.performSearch}>
										<img src={search} alt='search icon' />
									</button>
								</div>
							</Col>
						</Hidden>

						<Visible xs>
							<Col xs={3} className='section'>
								<div className='input'>
									<button onClick={this.toggleSearchBar}>
										<img src={search} alt='search icon' />
									</button>
								</div>
							</Col>
						</Visible>
					</Row>
				</Container>
			</header>
		);
	}
}

export default Header;
