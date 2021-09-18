import React, { useState, useEffect } from "react";

import "./index.scss";

import Avatar from "../UI/Avatar";
import CloseButton from "../UI/CloseButton";

import { fetchUser } from "../../utils/api";

export default function PlayerPreview({ title, player, onPreviewClose }) {
	const [user, setUser] = useState({});

	useEffect(() => {
		fetchUser(player)
			.then(({ login, id, avatar_url, html_url }) => {
				setUser({ login, id, avatar_url, html_url });
			})
			.catch(err => console.error(err));
	}, [player]);

	return (
		<div className="player preview">
			<h1 className="player__label">{title}</h1>
			<div
				className="card preview__card"
				onClick={() => window.open(user.html_url)}
			>
				<Avatar imageURL={user.avatar_url} title={title} />
				<p className="preview__username">
					<a href={null} target="_blank">{user.login}</a>
				</p>
				<CloseButton onClose={onPreviewClose} />
			</div>
		</div>
	);
}
