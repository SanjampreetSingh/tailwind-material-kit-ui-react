
export const baseInputStyles = 'block px-2.5 pb-2.5 w-full h-14 text-base appearance-none focus:outline-none focus:ring-0 focus:outline-none focus:ring-0 peer';

export const baseLabelStyles = 'absolute text-sm duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] peer-focus:text-slate-500 peer-focus:font-normal peer-focus:leading-none peer-placeholder-shown:text-slate-500 peer-placeholder-shown:font-normal peer-placeholder-shown:leading-none';

// Size Styles
export const sizeStyles = {
    small: {
        input: '',
        label: '',
    },
    medium: {
        input: '',
        label: '',
    },
};

// Variant styles
export const variantStyles: any = {
    filled: {
        primary: {
            input: 'pt-5 bg-zinc-200 text-zinc-900 border-0 border-b border-zinc-700 rounded-tl rounded-tr flex flex-col justify-start items-start focus:border-0 focus:border-b-2  focus:border-slate-500 ',
            label: 'text-base text-zinc-700 font-normal leading-normal top-4 left-2.5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 h-14',
        },
    },
    outlined: {
        primary: {
            input: 'pt-4 bg-transparent text-zinc-900 rounded-lg border border-zinc-500  focus:border-zinc-500',
            label: 'text-base text-zinc-700 font-normal leading-normal top-2 left-1 bg-white px-2 peer-focus:px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2',
        },
    },
};
