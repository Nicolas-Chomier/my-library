import React from 'react';
import './DatePicker.css';
type TDatePickerProps = {
    limitDateMin?: number;
    limitDateMax?: number;
    onDateSelect: (value: [string, string]) => void;
};
export declare const DatePicker: React.FC<TDatePickerProps>;
export {};
