import React from "react";

import "./PopularNav.css";

export default function PopularNav() {
	const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
	return (
		<ul className="nav">
			{languages.map(language => (
				<li key={language} className="nav__item">
					<a href="/" className="nav__link">
						{language}
					</a>
				</li>
			))}
		</ul>
	);
}
