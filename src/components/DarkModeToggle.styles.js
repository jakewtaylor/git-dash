import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    container: `
        py-4 flex flex-row items-center justify-end
    `,

    icon: `
        text-gray-600
    `,

    switch: `
        bg-gray-400 dark:bg-gray-800
        box-content
        border-2 border-gray-400 dark:border-gray-800
        w-12 h-6 rounded-full
        relative
        focus:outline-none
        transition-shadow duration-200
        active:shadow
        mx-2
    `,

    knob: `
        w-6 h-6 rounded-full
        bg-gray-200 dark:bg-gray-700
        absolute top-0 left-1/2
        transition-transform duration-200
        transform translate-x-0
    `,

    knobInactive: `
        -translate-x-full
    `,
  });
