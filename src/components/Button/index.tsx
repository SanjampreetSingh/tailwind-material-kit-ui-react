import React from 'react';

type ButtonVariant = 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor =
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';

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
    const baseStyles =
        'self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex';
    const baseButtonStyles =
        'rounded-full flex-col justify-center items-center gap-2 inline-flex';
    const baseLabelStyles =
        'text-center leading-tight tracking-tight font-semibold';

    const sizeStyles = {
        small: {
            button: 'w-20 h-10',
            label: 'text-sm',
        },
        medium: {
            button: 'w-30 h-15',
            label: 'text-base',
        },
        large: {
            button: 'w-40 h-20',
            label: 'text-lg',
        },
    };

    const buttonStyle = `${baseButtonStyles} ${sizeStyles[size]?.button}`;
    const labelStyle = `${baseLabelStyles} ${sizeStyles[size]?.label}`;

    return (
        <button type="button" className={buttonStyle} {...props}>
            <div className={baseStyles}>
                <div className={labelStyle}>
                    {label} {children}
                </div>
            </div>
        </button>
    );
};
