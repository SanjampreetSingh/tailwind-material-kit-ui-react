// Base buttons styles
export const baseButtonStyles =
    'rounded-full flex-col justify-center items-center gap-2 inline-flex group';

export const baseAreaStyles =
    'rounded-full self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex';

export const baseLabelStyles =
    'text-center leading-tight tracking-tight font-medium';

// Size Styles
export const sizeStyles = {
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

// Variant styles
export const variantStyles: any = {
    filled: {
        primary: {
            button: 'bg-violet-500 hover:shadow dark:disabled:bg-inherit disabled:bg-inherit dark:bg-violet-300',
            baseArea:
                'hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 active:bg-white active:bg-opacity-10 group-disabled:bg-zinc-900 group-disabled:bg-opacity-10 dark:hover:bg-violet-950 dark:hover:bg-opacity-10 dark:focus:bg-violet-950 dark:focus:bg-opacity-10 dark:active:bg-violet-950 dark:active:bg-opacity-10 dark:group-disabled:bg-zinc-200 dark:group-disabled:bg-opacity-10',
            label: 'text-white group-disabled:opacity-40 group-disabled:text-zinc-900 dark:text-violet-950 dark:group-disabled:opacity-40 dark:group-disabled:text-zinc-200',
        },
    },
    outlined: {
        primary: {
            button: 'border border-zinc-500 hover:border-zinc-500 focus:border-violet-500 active:border-zinc-500 disabled:border-zinc-900 disabled:border-opacity-10 dark:border-neutral-400 dark:hover:border-neutral-400 dark:focus:border-violet-300 dark:active:border-neutral-400 dark:disabled:border-zinc-200 dark:disabled:border-opacity-10',
            baseArea:
                'hover:bg-violet-500 hover:bg-opacity-10 focus:bg-violet-500 focus:bg-opacity-10 active:bg-violet-500 active:bg-opacity-10 dark:hover:bg-violet-300 dark:hover:bg-opacity-10 dark:focus:bg-violet-300 dark:focus:bg-opacity-10 dark:active:bg-violet-300 dark:active:bg-opacity-10',
            label: 'text-violet-800 group-disabled:opacity-40 group-disabled:text-zinc-900 dark:text-violet-300 dark:hover:text-violet-300 dark:focus:text-violet-300 dark:active:text-violet-300 dark:group-disabled:opacity-40 dark:group-disabled:text-zinc-200',
        },
    },
    text: {
        primary: {
            button: '',
            baseArea:
                'hover:bg-slate-500 hover:bg-opacity-10 focus:bg-slate-500 focus:bg-opacity-10 active:bg-slate-500 active:bg-opacity-10',
            label: 'text-violet-700 hover:text-violet-700 focus:text-violet-500 active:text-violet-500 group-disabled:opacity-40 group-disabled:text-zinc-900',
        },
    },
    elevated: {
        primary: {
            button: 'bg-violet-100 shadow-md dark:bg-zinc-900 dark:shadow-md dark:hover:bg-zinc-900 dark:hover:shadow-md dark:focus:bg-zinc-900 dark:focus:shadow-md dark:active:bg-zinc-900 dark:active:shadow-md',
            baseArea:
                'hover:bg-violet-500 hover:bg-opacity-10 hover:shadow-md focus:bg-violet-500 focus:bg-opacity-10 focus:shadow-md active:bg-violet-500 active:bg-opacity-10 active:shadow-md group-disabled:bg-zinc-900 group-disabled:bg-opacity-10 dark:text-violet-300 dark:hover:bg-violet-300 dark:hover:bg-opacity-10 dark:focus:bg-violet-300 dark:focus:bg-opacity-10 dark:active:bg-violet-300 dark:active:bg-opacity-10 dark:group-disabled:bg-zinc-200 dark:group-disabled:bg-opacity-10',
            label: 'text-violet-500 group-disabled:opacity-40 group-disabled:text-zinc-900 dark:hover:text-violet-300 dark:focus:text-violet-300 dark:active:text-violet-300 dark:group-disabled:opacity-40 dark:group-disabled:text-zinc-200',
        },
    },
    tonal: {
        primary: {
            button: 'bg-violet-200 hover:bg-violet-200 hover:shadow focus:bg-violet-200 active:bg-violet-200 dark:bg-zinc-600 dark:hover:bg-zinc-600 dark:hover:shadow dark:focus:bg-zinc-600 dark:active:bg-zinc-600',
            baseArea:
                'hover:bg-gray-900 hover:bg-opacity-10 focus:bg-gray-900 focus:bg-opacity-10 active:bg-gray-900 active:bg-opacity-10 group-disabled:bg-zinc-900 group-disabled:bg-opacity-10 dark:hover:bg-violet-200 dark:hover:bg-opacity-10 dark:focus:bg-violet-200 dark:focus:bg-opacity-10 dark:active:bg-violet-200 dark:active:bg-opacity-10 dark:group-disabled:bg-zinc-200 dark:group-disabled:bg-opacity-10',
            label: 'text-gray-900 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 group-disabled:opacity-40 group-disabled:text-zinc-900 dark:text-violet-200 dark:hover:text-violet-200 dark:focus:text-violet-200 dark:active:text-violet-200 dark:group-disabled:opacity-40 dark:group-disabled:text-zinc-200',
        },
    },
};
