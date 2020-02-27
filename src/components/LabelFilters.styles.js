import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    container: `
        flex flex-row justify-between items-end
        w-full mb-2 px-1 mt-16
    `,

    selected: `
        flex flex-row items-center
    `,

    selectedLabel: `
        -mb-px text-sm
        mr-2 leading-none
        text-gray-700 dark:text-gray-500
    `,

    button: `
        text-sm
        text-purple-600
        focus:outline-none
        active:font-semibold
    `,

    button2: `
        text-sm ml-4
        text-gray-700 dark:text-gray-500
        focus:outline-none
        active:font-semibold
    `,
  });
