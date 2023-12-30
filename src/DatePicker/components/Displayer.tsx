// React core
import React from 'react';
// External modules / Third-party libraries
// Local components
// Hooks and utilities
// Configuration
// Styles
import styles from './Displayer.module.css';

type TDisplayerProps = {
	monthList: string[];
	date: Date;
	message?: string | null;
};

export const Displayer: React.FC<TDisplayerProps> = ({
	monthList,
	date,
	message,
}) => {
	if (message) return <div className={styles.container}>{message}</div>;

	return (
		<div className={styles.container}>{`${
			monthList[date.getMonth()]
		} ${date.getFullYear()}`}</div>
	);
};
