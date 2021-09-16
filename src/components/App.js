import React, { useState, useEffect } from "react";

import LanguagesNav from "./LanguagesNav";
import PopularRepos from "./PopularRepos";

import { fetchPopularRepos } from "../utils/api";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

export default function App() {
	const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
	const [error, setError] = useState(null);
	const [repos, setRepos] = useState({});

	useEffect(() => {
		reset();
		fetchPopularRepos(currentLanguage)
			.then(data => {
				return setRepos(prevRepos => updateRepos(prevRepos, data));
			})
			.catch(error => setError(error.message));
	}, [currentLanguage]);

	async function onLanguageChange(language) {
		reset();
		setCurrentLanguage(language);
		if (!repos[language]) {
			try {
				const data = await fetchPopularRepos(language);
				setRepos(prevRepos => updateRepos(prevRepos, data));
			} catch (error) {
				setError(error.message);
			}
		}
	}

	function updateRepos(oldRepos, data) {
		const newRepos = { ...oldRepos };
		newRepos[currentLanguage] = data;
		return newRepos;
	}

	function reset() {
		setError(null);
	}

	function isLoading() {
		return !error && !repos[currentLanguage];
	}
	return (
		<div>
			<LanguagesNav
				languages={languages}
				currentLanguage={currentLanguage}
				updateLanguage={onLanguageChange}
			/>
			<PopularRepos
				isDataLoading={isLoading}
				currentLanguage={currentLanguage}
        repos={repos[currentLanguage]}
				error={error}
			/>
		</div>
	);
}
