// React core
import React, { useState, useEffect } from 'react';
// External modules / Third-party libraries
// Local components
// Hooks and utilities
// Configuration
// Styles
import './Input.css';

type TInputProps = {
	initialValue: string;
	placeholder: string;
	size?: number;
	onValueChange: (value: string) => void;
};

export const Input: React.FC<TInputProps> = ({
	initialValue,
	placeholder,
	size = 10,
	onValueChange,
}) => {
	const [value, setValue] = useState(initialValue || '');

	// Update local state and notify parent when the initialValue changes
	useEffect(() => {
		setValue(initialValue);
		onValueChange(initialValue);
	}, [initialValue, onValueChange]);

	// Handle changes in the input field
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		onValueChange(event.target.value);
	};

	// Allow only digits in the input
	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (/^[a-zA-Z]$/.test(event.key)) {
			event.preventDefault();
		}
	};

	return (
		<input
			className={'inputDate'}
			type='text'
			size={size}
			minLength={10}
			maxLength={10}
			onKeyDown={handleKeyDown}
			placeholder={placeholder}
			onChange={handleChange}
			value={value}
		/>
	);
};
