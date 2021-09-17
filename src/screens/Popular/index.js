import React, { useState, useEffect } from "react";

import "./index.scss";

import { fetchPopularRepos } from "../../utils/api";

import LanguagesNav from "../../components/LanguagesNav";
import PopularRepos from "../../components/PopularRepos";

const languages = ["All", "JavaScript", "Ruby", "Go", "CSS", "Python"];

export default function PopularScreen() {
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
		<>
			<LanguagesNav
				languages={languages}
				currentLanguage={currentLanguage}
				updateLanguage={onLanguageChange}
			/>
			<PopularRepos
				isDataLoading={isLoading}
				currentLanguage={currentLanguage}
				repos={repos[currentLanguage] && repos[currentLanguage].items}
				error={error}
			/>
		</>
	);
}
