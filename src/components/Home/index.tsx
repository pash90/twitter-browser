/** Libraries */
import React from 'react';
import { ClipLoader } from 'react-spinners';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';

/** Components */
import Result from './Result';

/** Assets */
import twitter from '../../assets/Twitter.svg';

/** Interfaces */
import { AppState } from '../../types';
import { User } from 'twitter-d';

interface HomeStateProps {
	results?: User[];
	isSearching: boolean;
}

/** Styles */
import './index.scss';

class Home extends React.Component<HomeStateProps> {
	render() {
		const { results, isSearching } = this.props;

		if (!isSearching && !results) {
			return (
				<Container>
					<Row>
						<Col className='empty-state'>
							<img src={twitter} alt='twitter logo' />
							<h3>
								{' '}
								Search for users by name, handle, company and other attributes
							</h3>
						</Col>
					</Row>
				</Container>
			);
		}

		if (isSearching) {
			return (
				<Container>
					<Row>
						<Col className='loading'>
							<ClipLoader loading color='#f2f2f2' size={32} />
						</Col>
					</Row>
				</Container>
			);
		}

		if (!results || results.length === 0) {
			//show error state here
			return <noscript />;
		}

		return (
			<Container>
				<Row className='results'>
					{results.map((result, index) => (
						<Result key={index} {...result} />
					))}
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state: AppState): HomeStateProps => {
	return {
		results: state.search.results,
		isSearching: state.search.isSearching
	};
};

export default connect(mapStateToProps)(Home);
