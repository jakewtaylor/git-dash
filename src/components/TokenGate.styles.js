import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    container: `
        flex flex-col items-center justify-center h-full
    `,

    text: `
        text-center max-w-md
        text-gray-800 mb-4
    `,

    link: `
        text-purple-600 font-semibold
    `,

    form: `
        shadow-lg rounded
    `,

    input: `
        w-56 h-12 px-4 rounded-l
        border border-gray-400 border-r-0
        focus:outline-none
        focus:border-purple-600
    `,

    button: `
        h-12 px-4 bg-purple-600 text-purple-100 rounded-r
        border border-purple-800 border-l-0
    `,
  });
