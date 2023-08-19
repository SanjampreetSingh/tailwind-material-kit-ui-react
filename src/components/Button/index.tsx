// todo: #1 Fix sizes
// todo: #2 Add more colors here
// | 'inherit'
// | 'secondary'
// | 'success'
// | 'error'
// | 'info'
// | 'warning';


import React from 'react';

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
    const baseButtonStyles =
        'rounded-full flex-col justify-center items-center gap-2 inline-flex';
    const baseAreaStyles =
        'rounded-full self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex';
    const baseLabelStyles =
        'text-center leading-tight tracking-tight font-medium';

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

    const variantStyles: any = {
        filled: {
            primary: {
                button: 'hover:shadow bg-violet-500 dark:disabled:bg-inherit disabled:bg-inherit dark:bg-violet-300',
                baseArea:
                    'hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 active:bg-white active:bg-opacity-10 group-disabled:bg-zinc-900 group-disabled:bg-opacity-10 dark:hover:bg-violet-950 dark:hover:bg-opacity-10 dark:focus:bg-violet-950 dark:focus:bg-opacity-10 dark:active:bg-violet-950 dark:active:bg-opacity-10 dark:group-disabled:bg-zinc-200 dark:group-disabled:bg-opacity-10',
                label: 'text-white group-disabled:opacity-40 group-disabled:text-zinc-900 dark:text-violet-950 dark:group-disabled:opacity-40 dark:group-disabled:text-zinc-200',
            },
        },
    };

    const buttonStyle = `${baseButtonStyles} ${sizeStyles[size]?.button} ${variantStyles[variant][color]?.button} group`;
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
