/** Libraries */
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { Container, Row, Col } from 'react-grid-system';
import { push } from 'connected-react-router';
import numeral from 'numeral';

/** Helpers */
import store from '../../store';
import { getUserById, getTweetsForUserById } from '../../actions';
import { getLinkifyComponent } from './helper';

/** Interfaces */
import { AppState, Tweet } from '../../types';
import { User, Entities } from 'twitter-d';

interface MatchProps {
	userId?: string;
}

interface UserProfileProps extends RouteComponentProps<MatchProps> {}

interface UserProfileStateProps {
	profile?: User;
	tweets?: Tweet[];
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
			getTweetsForUserById(userId);
		}
	}

	componentWillUnmount() {
		store.dispatch({
			type: 'REMOVE_CURRENT_USER'
		});
	}

	formatNumber = (count: number) => {
		return numeral(count)
			.format('0.0a')
			.replace('k', 'K')
			.replace('m', 'M')
			.replace('b', 'B');
	};

	render() {
		const { profile, tweets } = this.props;

		if (!profile || !tweets) {
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
			description,
			followers_count
		} = profile;
		return (
			<Container>
				<Row className='user-profile'>
					<Col xs={12} sm={5} md={3} className='sidebar'>
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

						{description && description.length > 0 && (
							<div className='about'>
								<p>{description}</p>
							</div>
						)}

						<div className='follower-count'>
							<p>{this.formatNumber(followers_count)}</p>
						</div>
					</Col>

					<Col
						xs={12}
						sm={6}
						md={8}
						offset={{ xs: 0, sm: 1 }}
						className='tweets'>
						{tweets.map((tweet, index) => {
							return (
								<div className='tweet' key={index}>
									<img
										src={tweet.user.profile_image_url_https.replace(
											'_normal',
											'_bigger'
										)}
										alt='profile picture'
									/>

									{getLinkifyComponent(tweet.text, tweet.entities)}
								</div>
							);
						})}
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state: AppState): UserProfileStateProps => {
	return {
		profile: state.search.current,
		tweets: state.search.currentTweets
	};
};

export default connect(mapStateToProps)(UserProfile);
