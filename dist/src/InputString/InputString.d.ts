import React from 'react';
import './InputString.css';
type TInputStringProps = {
    type: 'text' | 'email' | 'password';
    regex?: RegExp;
    errors?: string;
    placeholder?: string;
    size?: number;
    isSubmit?: boolean;
    isValid?: boolean;
    disabled?: boolean;
    className?: string;
    onFieldChange: (value: string | undefined) => void;
};
export declare const InputString: React.FC<TInputStringProps>;
export {};
