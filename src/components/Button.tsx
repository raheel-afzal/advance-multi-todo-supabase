import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ onClick, children, className, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 my-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;