import React from 'react';
import './SelectMultiple.css';
type TSelectMultipleProps = {
    data?: string[];
    placeholder?: string;
    label?: string;
    labelPosition?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify';
    size?: number;
    isSubmit?: boolean;
    isValid?: boolean;
    pickLimit?: number;
    overSizeLimit?: number;
    disabled?: boolean;
    isBeautiful?: boolean;
    className?: string;
    onFieldChange: (value: string[]) => void;
};
export declare const SelectMultiple: React.FC<TSelectMultipleProps>;
export {};
