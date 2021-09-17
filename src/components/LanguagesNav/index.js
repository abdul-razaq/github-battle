import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function LanguagesNav({
	updateLanguage,
	currentLanguage,
	languages,
}) {
	function onLanguageChange(language) {
		updateLanguage(language);
	}

	return (
		<ul className="nav">
			{languages.map(language => (
				<li
					key={language}
					className={`nav__item ${
						language === currentLanguage ? "current" : ""
					}`}
				>
					<a
						className="nav__link"
						onClick={onLanguageChange.bind(null, language)}
					>
						{language}
					</a>
				</li>
			))}
		</ul>
	);
}

LanguagesNav.propTypes = {
	languages: PropTypes.arrayOf(PropTypes.string).isRequired,
	currentLanguage: PropTypes.string.isRequired,
	updateLanguage: PropTypes.func.isRequired,
};
