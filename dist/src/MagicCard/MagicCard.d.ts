import React, { ReactNode } from 'react';
import './MagicCard.css';
type TMagicCardProps = {
    children: ReactNode;
    isShadow: boolean;
    style?: 'background' | 'border';
    className?: string;
};
export declare const MagicCard: React.FC<TMagicCardProps>;
export {};
