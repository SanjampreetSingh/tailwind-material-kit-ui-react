import { Button, ButtonProps } from '../index';

export default {
    title: 'Components/Buttons',
    component: Button,
    argTypes: {
        color: {
            control: {
                type: 'radio', options: ['inherit',
                    'primary',
                    'secondary',
                    'success',
                    'error',
                    'info',
                    'warning']
            }
        },
        size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
        variant: { control: { type: 'radio', options: ['filled', 'outlined', 'text', 'elevated', 'tonal'] } },
    },
}

export const Variants = (args: ButtonProps) =>  <Button { ...args } label='Button' />;
