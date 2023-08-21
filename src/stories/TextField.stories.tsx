import { TextField, TextFieldProps } from '../components/TextField';

export default {
    title: 'Components/TextField',
    component: TextField,
    argTypes: {},
};

export const Variants = (args: TextFieldProps) => (
    <div className="flex w-full justify-center p-10 gap-10">
        <TextField
            {...args}
            variant="filled"
            label="Filled"
            autoComplete="off"
        />
        <TextField
            {...args}
            variant="outlined"
            label="Outlined"
            autoComplete="off"
        />
    </div>
);
