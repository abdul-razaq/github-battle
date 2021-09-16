import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function PopularRepos({
	isDataLoading,
	currentLanguage,
	error,
	repos,
}) {
	// render a list of Repo cards
	return (
		<>
			{isDataLoading() && (
				<p className="center-text">{`Fetching Popular Repos for ${currentLanguage}...`}</p>
			)}
			{error && <p className="center-text">{error}</p>}
			{repos && <pre>{JSON.stringify(repos[currentLanguage], null, 2)}</pre>}
		</>
	);
}

PopularRepos.propTypes = {
	error: PropTypes.string.isRequired,
	currentLanguage: PropTypes.string.isRequired,
	isDataLoading: PropTypes.func.isRequired,
	repos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
