import React from 'react';
import './Calendar.css';
type TCalendarProps = {
    limitDateMin?: number;
    limitDateMax?: number;
    targetDate: Date;
    startDate: string;
    endDate: string;
    handleClick: (date: Date) => void;
};
export declare const Calendar: React.FC<TCalendarProps>;
export {};
