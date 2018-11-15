/** Libraries */
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { Container, Row, Col } from 'react-grid-system';
import { push } from 'connected-react-router';

/** Helpers */
import store from '../../store';
import { getUserById } from '../../actions';

/** Interfaces */
import { SearchResult, AppState } from '../../types';

interface MatchProps {
	userId?: string;
}

interface UserProfileProps extends RouteComponentProps<MatchProps> {}

interface UserProfileStateProps {
	profile?: SearchResult;
}

/** Styles */
import './index.scss';

/** Initialisation */
const dispatch = store.dispatch;

/** UserProfile */
class UserProfile extends React.Component<
	UserProfileProps & UserProfileStateProps
> {
	componentDidMount() {
		const {
			match: {
				params: { userId }
			}
		} = this.props;

		if (!userId) {
			dispatch(push('/'));
		} else {
			getUserById(userId);
		}
	}

	render() {
		const { profile } = this.props;

		if (!profile) {
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

		const {
			name,
			profile_image_url_https,
			profile_link_color,
			screen_name,
			description
		} = profile;
		return (
			<Container>
				<Row className='user-profile'>
					<Col xs={12} sm={5} md={3} className='sidebar' debug>
						<div className='img-container'>
							<img
								src={profile_image_url_https.replace('_normal', '_400x400')}
								alt='profile image'
								style={{ border: `4px solid #${profile_link_color}` }}
							/>
						</div>

						<p className='name'>{name}</p>
						<a
							href={`https://twitter.com/${screen_name}`}
							className='handle'
							target='_blank'
							rel='noopener noreferrer'>
							@{screen_name}
						</a>

						<div className='about'>
							<p>{description}</p>
						</div>
					</Col>

					<Col xs={12} sm={7} md={9} debug>
						Tweets
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state: AppState): UserProfileStateProps => {
	return {
		profile: state.search.current
	};
};

export default connect(mapStateToProps)(UserProfile);
