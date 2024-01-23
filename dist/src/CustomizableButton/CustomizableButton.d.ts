import React, { ReactNode } from 'react';
import './CustomizableButton.css';
type TCustomizableButtonProps = {
    children?: [ReactNode, ReactNode] | ReactNode;
    disabled?: boolean;
    className?: string;
    handleClick: ({ ...props }: {
        [x: string]: any;
    }) => void;
};
export declare const CustomizableButton: React.FC<TCustomizableButtonProps>;
export {};
