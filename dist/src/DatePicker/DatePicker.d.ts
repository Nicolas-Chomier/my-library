import React from 'react';
import './DatePicker.css';
export declare const constants: {
    months: string[];
    datePattern: RegExp;
    errorMessage: string;
    limitMessage: string;
    dateFormat: string;
    locales: string;
    ambienceText: {
        addYear: string;
        addMonth: string;
        removeYear: string;
        removeMonth: string;
    };
};
type TInputProps = {
    initialValue: string;
    placeholder: string;
    size?: number;
    onValueChange: (value: string) => void;
};
export declare const Input: React.FC<TInputProps>;
type TDisplayerProps = {
    monthList: string[];
    date: Date;
    message?: string | null;
};
export declare const Displayer: React.FC<TDisplayerProps>;
export {};
