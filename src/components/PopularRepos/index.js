import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

import Repo from "../Repo";

export default function PopularRepos({
	isDataLoading,
	currentLanguage,
	error,
	repos,
}) {
	return (
		<>
			{isDataLoading() && (
				<p className="center-text">{`Fetching Popular Repos for ${currentLanguage}...`}</p>
			)}
			{error && <p className="center-text">{error}</p>}
			<div className="repos">
				{repos &&
					repos.map(
						(
							{
								name,
								owner: { login, avatar_url },
								html_url,
								stargazers_count,
								forks,
								open_issues,
							},
							index
						) => (
							<Repo
								key={html_url}
								id={index + 1}
								name={name}
								login={login}
								avatar={avatar_url}
								html={html_url}
								stars={stargazers_count}
								forks={forks}
								issues={open_issues}
							/>
						)
					)}
			</div>
		</>
	);
}

PopularRepos.propTypes = {
	error: PropTypes.string,
	currentLanguage: PropTypes.string.isRequired,
	isDataLoading: PropTypes.func.isRequired,
	repos: PropTypes.arrayOf(PropTypes.object),
};
