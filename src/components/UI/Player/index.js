import React from 'react';
import PropTypes from 'prop-types';

import {
	FaUser,
	FaCompass,
	FaBriefcase,
	FaUsers,
	FaUserFriends,
} from 'react-icons/fa';

import './index.scss';

import Card from '../../UI/Card';
import Tooltip from '../../UI/Tooltip';

export default function Player({ player, title }) {
	return (
		<Card
			url={player.profile.html_url}
			title={title}
			avatar={player.profile.avatar_url}
			loginName={player.profile.login}
			score={player.score}
		>
			<li className="card__detail">
				<FaUser size={20} color="rgb(255, 191, 116)" />
				<p>{player.profile.name}</p>
			</li>
			{player.profile.location && (
				<Tooltip content="User's Location">
					<li className="card__detail">
						<FaCompass size={20} color="rgb(144, 115, 255)" />
						<p>
							<span>{player.profile.location}</span>
						</p>
					</li>
				</Tooltip>
			)}
			{player.profile.company && (
				<Tooltip content="User's Company">
					<li className="card__detail">
						<FaBriefcase size={20} color="#795548" />
						<p>
							<span>{player.profile.company}</span>
						</p>
					</li>
				</Tooltip>
			)}
			<li className="card__detail">
				<FaUsers size={20} color="rgb(129, 195, 245)" />
				<p>
					<span>{player.profile.followers.toLocaleString()}</span> followers
				</p>
			</li>
			<li className="card__detail">
				<FaUserFriends size={20} color="rgb(64, 183, 95)" />
				<p>
					<span>{player.profile.following.toLocaleString()}</span> following
				</p>
			</li>
		</Card>
	);
}

Player.propTypes = {
	title: PropTypes.string.isRequired,
	player: PropTypes.object.isRequired,
};
