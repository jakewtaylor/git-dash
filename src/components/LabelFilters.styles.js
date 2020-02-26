import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    container: `
        p-4 pb-0 bg-gray-100 shadow-sm rounded border bordery-gray-300
        mt-4
    `,

    section: `
        pb-4
    `,

    text: `
        text-gray-900 font-light
    `,

    button: `
        rounded bg-gray-400 leading-none
        p-2 mt-1
    `,
  });
