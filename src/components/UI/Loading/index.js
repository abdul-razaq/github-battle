import React, { useState, useEffect } from 'react';

import './index.scss';

export default function Loading() {
	const [loadingText, setLoadingText] = useState('Loading');

	useEffect(() => {
		const timeout = setTimeout(() => {
			loadingText === 'Loading...'
				? setLoadingText('Loading')
				: setLoadingText(loadingText => loadingText + '.');
		}, 300);
		return () => clearTimeout(timeout);
	}, [loadingText]);

	return (
		<div className="loading">
			<h1>{loadingText}</h1>
		</div>
	);
}
