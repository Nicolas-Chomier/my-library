import React from 'react';
import './DatePicker.css';
type TDatePickerProps = {
    placeholder?: string;
    limitDateMin?: number;
    limitDateMax?: number;
    isSubmit?: boolean;
    isValid?: boolean;
    open?: boolean;
    disabled?: boolean;
    size?: 'small' | 'standard';
    isBeautiful?: boolean;
    className?: string;
    onFieldChange: (value: [Date | undefined, Date | undefined] | undefined) => void;
};
export declare const DatePicker: React.FC<TDatePickerProps>;
export {};
