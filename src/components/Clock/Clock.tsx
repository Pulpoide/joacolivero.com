"use client"

import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
	const [time, setTime] = useState<Date>(new Date());

	useEffect(() => {
		const updateClock = () => {
			const now = new Date();
			setTime(now);
		};

		const timerId = setInterval(updateClock, 60000);
		updateClock();

		return () => clearInterval(timerId);
	}, []);

	const formatTime = (date: Date): string => {
		const options: Intl.DateTimeFormatOptions = {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		};
		return date.toLocaleTimeString('es-AR', options);
	};

	const getLocalTime = (date: Date): string => {
		const localTime = new Date(date.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
		return formatTime(localTime);
	};

	return (
		<span>{getLocalTime(time)} (GMT-3)</span>
	);
};

export default Clock;
