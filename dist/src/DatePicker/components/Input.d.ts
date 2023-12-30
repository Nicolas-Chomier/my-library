import React from 'react';
import './Input.css';
type TInputProps = {
    initialValue: string;
    placeholder: string;
    size?: number;
    onValueChange: (value: string) => void;
};
export declare const Input: React.FC<TInputProps>;
export {};
