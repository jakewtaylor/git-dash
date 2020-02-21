import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    repos: `
        flex flex-row items-center justify-center flex-wrap
    `,

    repo: `
        bg-gray-400 inline-block whitespace-no-wrap
        m-1 rounded-full p-1 pr-3
        flex flex-row items-center
        text-gray-800

        hover:bg-gray-500
        focus:outline-none
        focus:bg-purple-300

        focus:text-purple-800
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
