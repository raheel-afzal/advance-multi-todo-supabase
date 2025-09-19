import React from 'react';
import { InputProps } from '../types';

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, ...props }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="flex-1 p-2 border rounded-md focus:outline-blue-400 focus:ring-blue-400"
            {...props}
        />
    );
};

export default Input;