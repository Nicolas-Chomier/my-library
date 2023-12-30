// React core imports
import React, { useState, useEffect, useRef, useCallback } from 'react';
// Styles
import styles from './DatePicker.module.css';

// Constants for months and date pattern validation
const constants = {
	Fr: {
		months: [
			'Janvier',
			'Février',
			'Mars',
			'Avril',
			'Mai',
			'Juin',
			'Juillet',
			'Août',
			'Septembre',
			'Octobre',
			'Novembre',
			'Décembre',
		],
		calendarFrame: [
			<tr key={'semaine'}>
				<td key={'lun'}>Lun</td>
				<td key={'mar'}>Mar</td>
				<td key={'mer'}>Mer</td>
				<td key={'jeu'}>Jeu</td>
				<td key={'ven'}>Ven</td>
				<td key={'sam'}>Sam</td>
				<td key={'dim'}>Dim</td>
			</tr>,
		],
		datePattern: new RegExp(
			'(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(\\d{4})',
		),
		errorMessage: 'La date de début doit etre inférieur à la date de fin !',
		limitMessage:
			'La date est au dessus ou au dessous des limites définies !',
		dateFormat: 'jj/mm/aaaa',
		locales: 'fr-FR',
		ambienceText: {
			addYear: 'Année suivante',
			addMonth: 'Mois suivant',
			removeYear: 'Année précédente',
			removeMonth: 'Mois précédent',
		},
	},
	Us: {
		months: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		calendarFrame: [
			<tr key={'week'}>
				<td key={'mon'}>Mon</td>
				<td key={'tue'}>Tue</td>
				<td key={'wed'}>Wed</td>
				<td key={'thu'}>Thu</td>
				<td key={'fri'}>Fri</td>
				<td key={'sat'}>Sat</td>
				<td key={'sun'}>Sun</td>
			</tr>,
		],
		datePattern: new RegExp(
			'(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/(\\d{4})',
		),
		errorMessage: 'Start Date must be lower than End Date !',
		limitMessage: 'Date is above or under specified limits !',
		inputTextError: 'Undefined',
		dateFormat: 'mm/dd/yyyy',
		locales: 'en-US',
		ambienceText: {
			addYear: 'Next year',
			addMonth: 'Next month',
			removeYear: 'Last year',
			removeMonth: 'Last month',
		},
	},
};

type TDatePickerProps = {
	zone: 'Us' | 'Fr';
	limitDateMin?: number;
	limitDateMax?: number;
	onDateSelect: (value: [string, string]) => void;
};

export const DatePicker = ({
	zone = 'Fr',
	limitDateMin,
	limitDateMax,
	onDateSelect,
}: TDatePickerProps) => {
	const {
		datePattern,
		dateFormat,
		calendarFrame,
		months,
		ambienceText,
		errorMessage,
		limitMessage,
		locales,
	} = constants[zone];
	// Today
	const today = new Date();
	// State hooks for dates
	const [calendarDate, setCalendarDate] = useState(new Date());
	const [startDate, setStartDate] = useState<string>('');
	const [endDate, setEndDate] = useState<string>('');
	// Refs & State hooks for logic / animation
	const swapDate = useRef(true); // Refs for alterante date selection
	const [showCalendar, setShowCalendar] = useState(false);
	const [message, setMessage] = useState('');
	// Extremum date limits
	const minimumDateAllowed = limitDateMin && dateAddDays(limitDateMin);
	const maximumDateAllowed = limitDateMax && dateAddDays(limitDateMax);

	// Handler for outside clicks to close the calendar
	const clickRef = useRef(null);
	const onClickOutside = () => {
		setShowCalendar(false);
	};
	useClickOutside(clickRef, onClickOutside);

	// Display error message
	useEffect(() => {
		if (startDate && endDate) {
			if (stringToDate(zone, startDate) > stringToDate(zone, endDate)) {
				setMessage(errorMessage);
			} else if (
				stringToDate(zone, startDate) < stringToDate(zone, endDate)
			) {
				setMessage('');
				onDateSelect([startDate, endDate]);
			} else {
				setMessage('');
			}
		}
	}, [startDate, endDate, errorMessage, zone, onDateSelect]);

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

	// Handler to get start date + checking limit allowed
	const handleChangeStartDate = useCallback(
		(value: string): void => {
			if (datePattern.test(value)) {
				const newDate = stringToDate(zone, value);
				const dateLimit = dateAddDays(limitDateMin);
				console.log(limitDateMin);
				if (limitDateMin) {
					if (dateLimit < newDate) {
						setCalendarDate(newDate);
						setStartDate(value);
					} else {
						setMessage(limitMessage);
						setStartDate(' ');
					}
				} else {
					setCalendarDate(newDate);
					setStartDate(value);
				}
			}
		},
		[datePattern, limitDateMin, zone, limitMessage],
	);

	// Handler to get end date + checking limit allowed
	const handleChangeEndDate = useCallback(
		(value: string): void => {
			if (datePattern.test(value)) {
				const newDate = stringToDate(zone, value);
				const dateLimit = dateAddDays(limitDateMax);
				if (dateLimit > newDate) {
					setCalendarDate(newDate);
					setEndDate(value);
				} else {
					setMessage(limitMessage);
					setEndDate(' ');
				}
			}
		},
		[datePattern, limitDateMax, zone, limitMessage],
	);

	// Handler for selecting a date from the calendar
	const handleClick = (newDate: Date) => {
		if (swapDate.current) {
			setStartDate(newDate.toLocaleDateString(locales));
			swapDate.current = false;
		} else {
			setEndDate(newDate.toLocaleDateString(locales));
			swapDate.current = true;
		}
	};

	// TSX
	return (
		<div ref={clickRef} onClick={() => setShowCalendar(true)}>
			<div>
				<InputDate
					placeholder={dateFormat}
					initialValue={startDate}
					onValueChange={handleChangeStartDate}
				></InputDate>
				<span>-</span>
				<InputDate
					placeholder={dateFormat}
					initialValue={endDate}
					onValueChange={handleChangeEndDate}
				></InputDate>
				<button onClick={handleReset}>X</button>
			</div>

			<div>
				<div>
					<button onClick={() => changeYear(-1)}>
						{ambienceText.removeYear}
					</button>
					<button onClick={() => changeMonth(-1)}>
						{ambienceText.removeMonth}
					</button>
					<Displayer
						monthList={months}
						date={calendarDate}
						message={message}
					></Displayer>
					<button onClick={() => changeMonth(1)}>
						{ambienceText.addMonth}
					</button>
					<button onClick={() => changeYear(1)}>
						{ambienceText.addYear}
					</button>
				</div>
			</div>
			{showCalendar ? (
				<Calendar
					frame={calendarFrame}
					zone={zone}
					today={today}
					limitDateMin={minimumDateAllowed}
					limitDateMax={maximumDateAllowed}
					targetDate={calendarDate}
					startDate={startDate}
					endDate={endDate}
					handleClick={handleClick}
				></Calendar>
			) : null}
		</div>
	);
};

//+ InputDate component: Renders a text input specifically for date input.
type TInputDateProps = {
	initialValue: string;
	placeholder: string;
	onValueChange: (value: string) => void;
};
const InputDate: React.FC<TInputDateProps> = ({
	initialValue,
	placeholder,
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
			type='text'
			size={10}
			minLength={10}
			maxLength={10}
			onKeyDown={handleKeyDown}
			placeholder={placeholder}
			onChange={handleChange}
			value={value}
		/>
	);
};

//+ Displayer date component, display given date
type TDateDisplayerProps = {
	monthList: string[];
	date: Date;
	message?: string | null;
};
const Displayer: React.FC<TDateDisplayerProps> = ({
	monthList,
	date,
	message,
}) => {
	if (message) return <div>{message}</div>;

	return <div>{`${monthList[date.getMonth()]} ${date.getFullYear()}`}</div>;
};

//+ Calendar component, display calendar panel where picked day
type TCalendarProps = {
	frame: React.ReactNode[];
	zone: string;
	today: Date;
	limitDateMin: Date | undefined | 0;
	limitDateMax: Date | undefined | 0;
	targetDate: Date;
	startDate: string;
	endDate: string;
	handleClick: (date: Date) => void;
};
const Calendar: React.FC<TCalendarProps> = ({
	frame,
	zone,
	today,
	limitDateMin,
	limitDateMax,
	targetDate,
	startDate,
	endDate,
	handleClick,
}) => {
	const calendar = [...frame];
	const year = targetDate.getFullYear();
	const month = targetDate.getMonth();
	const daysInMonth = getDaysInMonth(year, month);
	const firstDayOfMonth = new Date(year, month, 1).getDay();

	let date = 1;

	for (let week = 0; week < 6; week++) {
		const weekRow = [];
		for (let day = 1; day < 8; day++) {
			if ((week === 0 && day < firstDayOfMonth) || date > daysInMonth) {
				weekRow.push(<td key={`${day}`}></td>);
			} else {
				const cellDate = new Date(year, month, date);
				const isToday =
					cellDate.toLocaleDateString() ===
					today.toLocaleDateString();
				const convertedCellDate = objectToSecond(zone, cellDate);
				const convertedStartDate = objectToSecond(zone, startDate);
				const convertedEndDate = objectToSecond(zone, endDate);
				const isDayUnderLimitDateMin =
					limitDateMin && cellDate < limitDateMin;
				const isDayAboveLimitDateMax =
					limitDateMax && cellDate > limitDateMax;
				const isStartDate =
					startDate && convertedCellDate === convertedStartDate;
				const isEndDate =
					endDate && convertedCellDate === convertedEndDate;
				const isBetweenDates =
					convertedCellDate > convertedStartDate &&
					convertedCellDate < convertedEndDate;

				if (isDayUnderLimitDateMin || isDayAboveLimitDateMax) {
					weekRow.push(
						<td
							key={`${week}-${day}`}
							className={`${styles.limited_dates}	${
								isToday ? styles.today : ''
							}`}
						>
							{date++}
						</td>,
					);
				} else {
					weekRow.push(
						<td
							key={`${week}-${day}`}
							onClick={() => handleClick(cellDate)}
							className={`${styles.dates} ${
								isStartDate ? styles.start_date : ''
							}	${isEndDate ? styles.end_date : ''}	${
								isBetweenDates ? styles.date_between : ''
							} ${isToday ? styles.today : ''}`}
						>
							{date++}
						</td>,
					);
				}
			}
		}
		calendar.push(
			<tr key={week} className={styles.calendar_row}>
				{weekRow}
			</tr>,
		);
		if (date > daysInMonth) break;
	}
	return (
		<table>
			<tbody>{calendar}</tbody>
		</table>
	);
};

// Transform string like: "dd/mm/yyyy" to Date object //! format US a faire
const stringToDate = (zone: string, date: string): Date => {
	if (zone === 'Fr') {
		const [day, month, year] = date.split('/').map(Number);
		const newDate = new Date(year, month - 1, day);
		return newDate;
	} else {
		const [month, day, year] = date.split('/').map(Number);
		const newDate = new Date(year, month - 1, day);
		return newDate;
	}
};

// Transform string like: "dd/mm/yyyy" or Date to number (second)
const objectToSecond = (zone: string, value: string | Date): number => {
	if (typeof value === 'string') {
		const newDate = stringToDate(zone, value);
		return Math.floor(newDate.getTime() / 1000);
	} else if (value instanceof Date) {
		return Math.floor(value.getTime() / 1000);
	} else {
		return 0;
	}
};

// Transform number of day to Date
const dateAddDays = (offset: number | undefined): Date => {
	const newDate = new Date();
	offset && newDate.setDate(newDate.getDate() + offset);
	return newDate;
};

// Utility function to get the number of days in a month
const getDaysInMonth = (year: number, month: number) =>
	32 - new Date(year, month, 32).getDate();

// Custom hook for detecting outside clicks
const useClickOutside = (
	ref: React.RefObject<HTMLElement>,
	callback: () => void,
) => {
	const handleClick = (e: MouseEvent) => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
};
