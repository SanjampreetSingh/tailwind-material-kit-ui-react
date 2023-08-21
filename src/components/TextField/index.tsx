import React, { useState } from 'react';
import { baseInputStyles, baseLabelStyles, variantStyles } from './styles';

type TextVariant = 'filled' | 'outlined';
type TextSize = 'small' | 'medium';
type TextColor = 'primary';

export interface TextFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    autoFocus?: boolean;
    children: React.ReactNode;
    color?: TextColor;
    defaultValue?: any;
    disabled?: boolean;
    id?: string;
    label?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    fieldSize?: TextSize;
    type?: string;
    value?: any;
    variant?: TextVariant;
}

export const TextField: React.FC<TextFieldProps> = ({
    autoFocus = false,
    children,
    color = 'primary',
    defaultValue,
    disabled = false,
    id = 'text_field',
    label = 'Text Field',
    name = '',
    onChange: onChangeFromProps,
    placeholder = ' ',
    required = false,
    fieldSize,
    type = 'text',
    value: valueFromProps,
    variant = 'filled',
    ...props
}) => {
    // A component can be considered controlled when its value prop is
    // not undefined.
    const isControlled = typeof valueFromProps != 'undefined';
    // When a component is not controlled, it can have a defaultValue.
    const hasDefaultValue = typeof defaultValue != 'undefined';

    // If a defaultValue is specified, we will use it as our initial
    // state.  Otherwise, we will simply use an empty string.
    const [internalValue, setInternalValue] = useState(
        hasDefaultValue ? defaultValue : '',
    );

    // Internally, we need to deal with some value. Depending on whether
    // the component is controlled or not, that value comes from its
    // props or from its internal state.
    const value = isControlled ? valueFromProps : internalValue;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // When the user types, we will call props.onChange if it exists.
        // We do this even if there is no props.value (and the component
        // is uncontrolled.)
        if (onChangeFromProps) {
            onChangeFromProps(e);
        }

        // If the component is uncontrolled, we need to update our
        // internal value here.
        if (!isControlled) {
            setInternalValue(e.target.value);
        }
    };

    return (
        <div className="relative">
            <input
                type={type}
                id={id}
                className={`${baseInputStyles} ${variantStyles[variant][color]?.input}`}
                placeholder={placeholder}
                disabled={disabled}
                name={name}
                required={required}
                onChange={onChange}
                value={value}
                {...props}
            />
            <label htmlFor={id} className={`${baseLabelStyles} ${variantStyles[variant][color]?.label}`}>
                {label}
            </label>
        </div>
    );
};
