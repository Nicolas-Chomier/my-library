// React core
import React, { useState, useEffect, useRef, useCallback } from 'react';
// External modules / Third-party libraries
import {
	CalendarRange,
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from 'lucide-react';
// Local components
import { Calendar } from './Calendar';
import { Displayer } from './Displayer';
import { Input } from './Input';
// Hooks and utilities
import { useClickOutside } from '../hooks/useClickOutside';
// Configuration
import { constants } from '../constant/constants';
// Styles
import './DatePicker.css';

type TDatePickerProps = {
	limitDateMin?: number;
	limitDateMax?: number;
	onDateSelect: (value: [string, string]) => void;
};

export const DatePicker: React.FC<TDatePickerProps> = ({
	limitDateMin,
	limitDateMax,
	onDateSelect,
}) => {
	const {
		datePattern,
		dateFormat,
		months,
		errorMessage,
		limitMessage,
		locales,
	} = constants['Fr'];

	// State hooks for dates
	const [calendarDate, setCalendarDate] = useState(new Date());
	const [startDate, setStartDate] = useState<string>('');
	const [endDate, setEndDate] = useState<string>('');
	// Refs & State hooks for logic / animation
	const swapDate = useRef(true); // Refs for alterante date selection
	const [showCalendar, setShowCalendar] = useState(false);
	const [message, setMessage] = useState('');
	console.log(showCalendar);
	// Handler for outside clicks to close the calendar
	const clickRef = useRef(null);
	const onClickOutside = () => {
		setShowCalendar(false);
	};
	useClickOutside(clickRef, onClickOutside);

	// useEffect to handle date validation
	useEffect(() => {
		// Check if both dates are present
		if (startDate && endDate) {
			const start = stringToDate(startDate);
			const end = stringToDate(endDate);

			if (start > end) {
				// Set an error message if the start date is after the end date
				setMessage(errorMessage);
			} else {
				// Clear the error message and execute onDateSelect if the dates are valid
				setMessage('');
				if (start < end) {
					onDateSelect([startDate, endDate]);
				}
			}
		}
	}, [startDate, endDate, errorMessage, onDateSelect]);

	// Function to add / remove years and months
	const changeMonth = (delta: number) =>
		setCalendarDate(
			(prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1),
		);

	const changeYear = (delta: number) =>
		setCalendarDate(
			(prev) => new Date(prev.getFullYear() + delta, prev.getMonth(), 1),
		);

	// Reset handler for clearing dates
	const handleReset = () => {
		setCalendarDate(new Date());
		setStartDate('');
		setEndDate('');
		setMessage('');
		swapDate.current = true;
	};

	// Handler to update the start date and check against the minimum allowed date
	const handleChangeStartDate = useCallback(
		(value: string): void => {
			// Check if the input value matches the date pattern
			if (datePattern.test(value)) {
				const newDate = stringToDate(value);
				const dateLimit = dateAddDays(limitDateMin);

				// Check if there is a minimum limit date defined
				if (limitDateMin) {
					// If the new date is after the minimum limit, update the calendar and start date
					if (dateLimit < newDate) {
						setCalendarDate(newDate);
						setStartDate(value);
					} else {
						// If the new date does not meet the minimum limit, show a limit message and reset start date
						setMessage(limitMessage);
						setStartDate(' ');
					}
				} else {
					// If no minimum limit is defined, just update the calendar and start date
					setCalendarDate(newDate);
					setStartDate(value);
				}
			}
		},
		[datePattern, limitDateMin, limitMessage],
	);

	// Handler to update the end date and check against the maximum allowed date
	const handleChangeEndDate = useCallback(
		(value: string): void => {
			// Check if the input value matches the date pattern
			if (datePattern.test(value)) {
				const newDate = stringToDate(value);
				const dateLimit = dateAddDays(limitDateMax);

				// Check if the new date is before the maximum limit date
				if (dateLimit > newDate) {
					// If the new date meets the condition, update the calendar and end date
					setCalendarDate(newDate);
					setEndDate(value);
				} else {
					// If the new date exceeds the maximum limit, show a limit message and reset end date
					setMessage(limitMessage);
					setEndDate(' ');
				}
			}
		},
		[datePattern, limitDateMax, limitMessage],
	);

	// Handler for selecting a date from the calendar
	const handleClick = (newDate: Date) => {
		// Check the state of swapDate to determine if we're setting the start or end date
		if (swapDate.current) {
			// If swapDate is true, set the selected date as the start date
			setStartDate(newDate.toLocaleDateString(locales));
			swapDate.current = false; // Set swapDate to false for the next selection
		} else {
			// If swapDate is false, set the selected date as the end date
			setEndDate(newDate.toLocaleDateString(locales));
			swapDate.current = true; // Set swapDate to true for the next selection
		}
	};

	// TSX
	return (
		<div
			ref={clickRef}
			onClick={() => setShowCalendar(true)}
			className={'datePicker_container'}
		>
			<div className={'inputs_wrapper'}>
				<Input
					placeholder={dateFormat}
					initialValue={startDate}
					onValueChange={handleChangeStartDate}
				></Input>

				<CalendarRange
					size={18}
					strokeWidth={1.5}
					className={'datePicker_input_separator'}
				/>

				<Input
					placeholder={dateFormat}
					initialValue={endDate}
					onValueChange={handleChangeEndDate}
				></Input>
			</div>
			{showCalendar ? (
				<div className={'datePicker_panel'}>
					<Displayer
						monthList={months}
						date={calendarDate}
						message={message}
					></Displayer>
					<Calendar
						limitDateMin={limitDateMin}
						limitDateMax={limitDateMax}
						targetDate={calendarDate}
						startDate={startDate}
						endDate={endDate}
						handleClick={handleClick}
					></Calendar>

					<div className={'button_panel'}>
						<button
							className={'datePicker_buttons'}
							onClick={() => changeYear(-1)}
						>
							<ChevronLeft size={22} strokeWidth={1.4} />
						</button>
						<button
							className={'datePicker_buttons'}
							onClick={() => changeMonth(-1)}
						>
							<ChevronsLeft size={25} strokeWidth={1.3} />
						</button>

						<div
							className={'datePicker_reset_button'}
							onClick={handleReset}
						>
							<div className={'datePicker_reset_text'}>Reset</div>
						</div>
						<button
							className={'datePicker_buttons'}
							onClick={() => changeMonth(1)}
						>
							<ChevronsRight size={25} strokeWidth={1.3} />
						</button>
						<button
							className={'datePicker_buttons'}
							onClick={() => changeYear(1)}
						>
							<ChevronRight size={22} strokeWidth={1.4} />
						</button>
					</div>
				</div>
			) : null}
		</div>
	);
};

// Transform string like: "dd/mm/yyyy" to Date object
const stringToDate = (date: string): Date => {
	const [day, month, year] = date.split('/').map(Number);
	return new Date(year, month - 1, day);
};
// Transform number of day to Date
const dateAddDays = (offset: number | undefined): Date => {
	const newDate = new Date();
	offset && newDate.setDate(newDate.getDate() + offset);
	return newDate;
};
