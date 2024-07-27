"use client";

import React from 'react';

const TextDecorator = ({ children, color, isUnderlined, isHighlighted, isBold, font, style }) => {
	const textStyle = {
		color: color || '#000000',
		textDecoration: isUnderlined ? 'underline' : 'none',
		fontWeight: isBold ? 'bold' : 'normal',
		fontFamily: font || 'Arial',
		backgroundColor: isHighlighted ? '#ffff00' : 'transparent',
		...style,
	};

	return (
		<span style={textStyle}>
      {children}
    </span>
	);
};

export default TextDecorator;
