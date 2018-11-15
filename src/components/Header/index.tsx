/** Libraries */
import React from 'react';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

/** Helpers */
import { searchTwitter } from '../../actions';

/** Assets */
import search from '../../assets/search.svg';

/** Interfaces */
interface HeaderStateProps {
	query?: string;
}

/** Styles */
import './index.scss';

class Header extends React.Component<{}, HeaderStateProps> {
	constructor(props: {}) {
		super(props);

		this.state = {};
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
	};

	render() {
		const { query } = this.state;

		return (
			<header>
				<Container>
					<Row>
						<Col xs={6} className='section'>
							<h3>Twttr</h3>
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
							<Col xs={6} className='section'>
								<div className='input'>
									<button>
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
