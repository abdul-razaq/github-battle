import React, { useState } from 'react';

export default function Hover(props) {
	const [hovering, setHovering] = useState(false);

	function handleMouseOver() {
		setHovering(true);
	}

	function handleMouseOut() {
		setHovering(false);
	}

	return (
		<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
			{props.children.call(null, hovering)}
		</div>
	);
}
