import React, { useState, useEffect } from 'react';

import './index.scss';

export default function Loading() {
	const [loadingText, setLoadingText] = useState('Loading');

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (loadingText === 'Loading...') {
				setLoadingText('Loading');
			} else {
				setLoadingText(loadingText => loadingText + '.');
			}
		}, 500);
		return () => clearTimeout(timeout);
	}, [loadingText]);

	return (
		<div className="loading">
			<h1>{loadingText}</h1>
		</div>
	);
}
