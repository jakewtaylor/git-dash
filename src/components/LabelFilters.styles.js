import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    container: `
        flex flex-row justify-between items-end
        w-full mb-2 px-1 mt-20
    `,

    selected: `
        flex flex-row items-center
    `,

    selectedLabel: `
        -mb-px
        mr-2 leading-none
        text-gray-700 text-sm
    `,

    button: `
        text-sm
        text-purple-600
        focus:outline-none
        active:font-semibold
    `,

    button2: `
        text-sm
        text-gray-700 ml-4
        focus:outline-none
        active:font-semibold
    `,
  });
