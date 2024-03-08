import React from 'react';
import './SearchBar.css';
type TSearchBarProps = {
    data?: string[];
    placeholder?: string;
    label?: string;
    labelPosition?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify';
    size?: number;
    isSubmit?: boolean;
    isValid?: boolean;
    overSizeLimit?: number;
    disabled?: boolean;
    isBeautiful?: boolean;
    className?: string;
    onFieldChange: (value: string | undefined) => void;
};
export declare const SearchBar: React.FC<TSearchBarProps>;
export {};
