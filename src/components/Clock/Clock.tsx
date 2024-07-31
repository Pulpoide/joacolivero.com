"use client"

import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Clock = ({ className }) => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const updateClock = () => {
			setTime(new Date());
		};

		const now = new Date();
		const delay = (60 - now.getSeconds()) * 1000;

		const timeoutId = setTimeout(() => {
			updateClock();

			const intervalId = setInterval(updateClock, 60000);
			return () => clearInterval(intervalId);
		}, delay);

		return () => clearTimeout(timeoutId);
	}, []);

	const formatTime = (date) => {
		const options = {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		};
		return date.toLocaleTimeString('es-AR', options);
	};

	const getLocalTime = (date) => {
		const localTime = new Date(date.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
		return formatTime(localTime);
	};

	return (
		<span className={`${styles.clock} ${className}`}>
			<FontAwesomeIcon icon={faClock} className={styles.clockIcon} />
			{getLocalTime(time)} (GMT-3)
        </span>
	);
};

export default Clock;
