// todo: #1 Fix sizes
// todo: #2 Add more colors here
// | 'inherit'
// | 'secondary'
// | 'success'
// | 'error'
// | 'info'
// | 'warning';

import React from 'react';
import {
    baseAreaStyles,
    baseButtonStyles,
    baseLabelStyles,
    sizeStyles,
    variantStyles,
} from './styles';

type ButtonVariant = 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    color?: ButtonColor;
    disabled?: boolean;
    label?: string;
    size?: ButtonSize;
    variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
    color = 'primary',
    disabled = false,
    label = '',
    size = 'medium',
    variant = 'filled',
    children,
    ...props
}) => {
    const buttonStyle = `${baseButtonStyles} ${sizeStyles[size]?.button} ${variantStyles[variant][color]?.button} `;
    const areaStyle = `${baseAreaStyles} ${variantStyles[variant][color]?.baseArea}`;
    const labelStyle = `${baseLabelStyles} ${sizeStyles[size]?.label} ${variantStyles[variant][color]?.label}`;

    return (
        <button
            type="button"
            className={buttonStyle}
            {...props}
            disabled={disabled}
        >
            <div className={areaStyle}>
                <div className={labelStyle}>
                    {label} {children}
                </div>
            </div>
        </button>
    );
};
