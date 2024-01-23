import React from 'react';
import './UserProfile.css';
type TUserProfileProps = {
    imagePath: string;
    fallBackPath: string;
    textTop?: string;
    textBottom?: string;
    isBeautiful?: boolean;
    animation?: boolean;
    className?: string;
};
export declare const UserProfile: React.FC<TUserProfileProps>;
export {};
