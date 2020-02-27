import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    repos: `
        flex flex-row items-center justify-center flex-wrap mb-4
    `,

    repo: `
        bg-gray-400 dark:bg-gray-800
        focus:bg-purple-300 dark-focus:bg-purple-800
        text-gray-800 dark:text-gray-400
        focus:text-purple-800 dark-focus:text-purple-300
        inline-block whitespace-no-wrap
        m-1 rounded-full p-1 pr-3
        flex flex-row items-center

        hover:bg-gray-500
        focus:outline-none
    `,

    imageContainer: `
        relative mr-2 rounded-full overflow-hidden
    `,

    removeOverlay: `
        absolute top-0 bottom-0 right-0 left-0
        bg-gray-600
        flex items-center justify-center
        opacity-75
    `,

    removeIcon: 'text-gray-200 text-xs leading-none',

    image: `
        w-6 h-6
    `,

    text: `
        text-sm leading-none font-semibold
    `,
  });
