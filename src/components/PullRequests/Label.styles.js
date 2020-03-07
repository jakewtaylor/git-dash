import { useTailwind } from '../../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    container: `
        relative mr-1
    `,

    tag: `
        leading-none text-xs px-2 py-1
        rounded-full font-semibold
        shadow-inner
        focus:outline-none
        focus:opacity-75
        hover:shadow
    `,

    tooltipWrapper: `
        absolute bottom-full left-1/2 pb-1
    `,

    tooltip: `
        bg-white dark:bg-gray-750 rounded
        border border-gray-300 dark:border-gray-800
        shadow-lg py-1 min-w-48 flex flex-col items-stretch
    `,

    button: `
        lowercase whitespace-no-wrap
        leading-none px-4 py-2 text-sm
        text-gray-700 dark:text-gray-300
        hover:bg-purple-300 hover:text-purple-800
        dark-hover:bg-purple-600 dark-hover:text-purple-100
        focus:outline-none
        focus:bg-gray-200
    `,
  });
