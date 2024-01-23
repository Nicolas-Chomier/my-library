import React from 'react';
import './FormButton.css';
type TFormButtonProps = {
    isSubmit?: boolean;
    isValid?: boolean;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};
export declare const FormButton: React.FC<TFormButtonProps>;
export {};
