import React, { useState, useEffect } from "react";

import "./PopularNav.css";
import { fetchPopularRepos } from "../../utils/api";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

export default function PopularNav() {
	const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
	const [error, setError] = useState(null);
	const [repos, setRepos] = useState(null);

	useEffect(() => {
		reset();
		fetchPopularRepos(currentLanguage)
			.then(repos => setRepos(repos))
			.catch(error => setError(error.message));
	}, [currentLanguage]);

	async function onChangeLanguage(language) {
		setCurrentLanguage(language);
		reset();
		try {
			const repos = await fetchPopularRepos(language);
			setRepos(repos);
		} catch (error) {
			setError(error.message);
		}
	}

	function reset() {
		setError(null);
		setRepos(null);
	}

	function isLoading() {
		return !error && !repos;
	}

	return (
		<>
			<ul className="nav">
				{languages.map((language, index) => (
					<li
						key={index}
						className={`nav__item ${language === currentLanguage && "current"}`}
					>
						<a
							className="nav__link"
							onClick={onChangeLanguage.bind(null, language)}
						>
							{language}
						</a>
					</li>
				))}
			</ul>
			{isLoading() && <p>{`Fetching Popular Repos for ${currentLanguage}...`}</p>}
			{error && <p>{error}</p>}
			{repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
		</>
	);
}
