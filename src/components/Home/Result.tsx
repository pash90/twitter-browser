/** Libraries */
import React from 'react';
import { Col } from 'react-grid-system';
import { NavLink } from 'react-router-dom';

/** Interfaces */
import { User } from 'twitter-d';

interface ResultProps extends User {}

class Result extends React.Component<ResultProps> {
	render() {
		const { name, profile_image_url_https, screen_name, id_str } = this.props;

		return (
			<Col xs={6} sm={4} md={3}>
				<div className='result'>
					<img
						className='avatar'
						src={profile_image_url_https.replace('_normal', '_200x200')}
						alt='user profile picture'
					/>

					<p className='name'>
						<strong>{name}</strong>
					</p>
					<p className='handle'>(@{screen_name})</p>

					<NavLink to={`/user-profile/${id_str}`} className='link' />
				</div>
			</Col>
		);
	}
}

export default Result;
