import { TextField, TextFieldProps } from '../components/TextField';

export default {
    title: 'Components/TextField',
    component: TextField,
    argTypes: {},
};

export const Variants = (args: TextFieldProps) => (
    <div className="flex w-full justify-between p-10">
        <TextField {...args} />
    </div>
);
