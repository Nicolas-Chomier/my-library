// React core
import React, { useMemo } from 'react';
// External modules / Third-party libraries
// Local components
// Hooks and utilities
// Configuration
// import  './Calendar.css';

const FRAME: React.ReactNode[] = [
	<tr className={'calendar_row'} key={'semaine'}>
		<td className={`${'calendar_day_cell'} ${'cell'}`} key={'Lu'}>
			Lu
		</td>
		<td className={`${'calendar_day_cell'} ${'cell'}`} key={'Ma'}>
			Ma
		</td>
		<td className={`${'calendar_day_cell'} ${'cell'}`} key={'Me'}>
			Me
		</td>
		<td className={`${'calendar_day_cell'} ${'cell'}`} key={'Je'}>
			Je
		</td>
		<td className={`${'calendar_day_cell'} ${'cell'}`} key={'Ve'}>
			Ve
		</td>
		<td className={`${'calendar_day_cell'} ${'cell'}`} key={'Sa'}>
			Sa
		</td>
		<td className={`${'calendar_day_cell'} ${'cell'}`} key={'Di'}>
			Di
		</td>
	</tr>,
];
const TODAY: string = new Date().toLocaleDateString();

type TCalendarProps = {
	limitDateMin?: number;
	limitDateMax?: number;
	targetDate: Date;
	startDate: string;
	endDate: string;
	handleClick: (date: Date) => void;
};

export const Calendar: React.FC<TCalendarProps> = ({
	limitDateMin,
	limitDateMax,
	targetDate,
	startDate,
	endDate,
	handleClick,
}) => {
	const generateCalendar = useMemo(() => {
		const calendar = [...FRAME];
		const year = targetDate.getFullYear();
		const month = targetDate.getMonth();
		const daysInMonth = getDaysInMonth(year, month);
		const firstDayOfMonth = new Date(year, month, 1).getDay();
		let date = 1;
		for (let week = 0; week < 6; week++) {
			const weekRow = [];
			for (let day = 1; day < 8; day++) {
				if (
					(week === 0 && day < firstDayOfMonth) ||
					date > daysInMonth
				) {
					weekRow.push(
						<td key={`${day}`} className={`${'cell'}`}></td>,
					);
				} else {
					const cellDate = new Date(year, month, date);
					const isToday = cellDate.toLocaleDateString() === TODAY;

					const convertedCellDate = dateToSecond(cellDate);
					const convertedStartDate = stringToSecond(startDate);
					const convertedEndDate = stringToSecond(endDate);

					const isDayUnderLimitDateMin =
						limitDateMin && cellDate < dateAddDays(limitDateMin);
					const isDayAboveLimitDateMax =
						limitDateMax && cellDate > dateAddDays(limitDateMax);
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
								className={`${'cell'} ${'out_dates'}`}
							>
								{date++}
							</td>,
						);
					} else {
						weekRow.push(
							<td
								key={`${week}-${day}`}
								onClick={() => handleClick(cellDate)}
								className={`${'cell'} ${'dates'} ${
									isStartDate
										? 'calendar_cell_start_date'
										: ''
								}	${isEndDate ? 'calendar_cell_end_date' : ''}	${
									isBetweenDates
										? 'calendar_cell_between'
										: ''
								} ${isToday ? 'calendar_cell_today' : ''}`}
							>
								{date++}
							</td>,
						);
					}
				}
			}
			calendar.push(
				<tr key={week} className={'calendar_row'}>
					{weekRow}
				</tr>,
			);
			if (date > daysInMonth) break;
		}
		return calendar;
	}, [
		limitDateMin,
		limitDateMax,
		targetDate,
		startDate,
		endDate,
		handleClick,
	]);

	return (
		<table className={'calendar_table'}>
			<tbody>{generateCalendar}</tbody>
		</table>
	);
};

// Transform string like: "dd/mm/yyyy" or Date to number (second)
const dateToSecond = (value: Date): number => {
	return Math.floor(value.getTime() / 1000);
};
//
const getDaysInMonth = (year: number, month: number): number => {
	return 32 - new Date(year, month, 32).getDate();
};
//
const stringToSecond = (value: string): number => {
	const [day, month, year] = value.split('/').map(Number);
	const newDate = new Date(year, month - 1, day);
	return Math.floor(newDate.getTime() / 1000);
};
// Transform number of day to Date
const dateAddDays = (offset: number | undefined): Date => {
	const newDate = new Date();
	offset && newDate.setDate(newDate.getDate() + offset);
	return newDate;
};
