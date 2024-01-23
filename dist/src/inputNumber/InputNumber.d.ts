import React from 'react';
import './InputNumber.css';
type TInputNumberProps = {
    errors?: string;
    placeholder?: string;
    size?: number;
    step?: string;
    min?: string;
    max?: string;
    outputNumber?: boolean;
    isSubmit?: boolean;
    isValid?: boolean;
    disabled?: boolean;
    className?: string;
    onFieldChange: (value: string | number | undefined) => void;
};
export declare const InputNumber: React.FC<TInputNumberProps>;
export {};
