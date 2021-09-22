import React, { useState } from 'react';

export default function withHover(Component, propName = 'hovering') {
	return function (props) {
		// return component that contains the hovering logic we want to share across multiple different components
		const [hovering, setHovering] = useState(false);

		function handleMouseOver() {
			setHovering(true);
		}

		function handleMouseOut() {
			setHovering(false);
		}

		const allProps = {
			...props,
			[propName]: hovering,
		};

		return (
			<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
				{<Component {...allProps} />}
			</div>
		);
	};
}
