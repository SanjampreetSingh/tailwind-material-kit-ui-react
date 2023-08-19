import { Button, ButtonProps } from '../index';

export default {
    title: 'Components/Buttons',
    component: Button,
    argTypes: {
        color: {
            control: {
                type: 'radio',
                options: ['primary'],
                // 'inherit',
                // 'secondary',
                // 'success',
                // 'error',
                // 'info',
                // 'warning'
            },
        },
        size: {
            control: { type: 'radio', options: ['small', 'medium', 'large'] },
        },
        variant: {
            control: {
                type: 'radio',
                options: ['filled', 'outlined', 'text', 'elevated', 'tonal'],
            },
        },
    },
};

export const Variants = (args: ButtonProps) => (
    <div className="flex w-full justify-between p-10">
        <Button
            {...args}
            variant="filled"
            label="Button filled"
            color="primary"
        />
        <Button
            {...args}
            variant="outlined"
            label="Button outlined"
            color="primary"
        />
        <Button {...args} variant="text" label="Button text" color="primary" />
        <Button
            {...args}
            variant="elevated"
            label="Button elevated"
            color="primary"
        />
        <Button
            {...args}
            variant="tonal"
            label="Button tonal"
            color="primary"
        />
    </div>
);
