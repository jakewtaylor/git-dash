import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    barWrapper: `
      flex flex-row mb-8 pt-4
    `,

    container: `-mt-4 mb-12`,

    text: `
        mb-2 text-gray-900 dark:text-gray-500 font-light
        leading-none
    `,
  });
