import React from 'react';
import './Displayer.css';
type TDisplayerProps = {
    monthList: string[];
    date: Date;
    message?: string | null;
};
export declare const Displayer: React.FC<TDisplayerProps>;
export {};
