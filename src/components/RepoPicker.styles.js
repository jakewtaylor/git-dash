import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    container: `
      pt-4
    `,
    text: `
        mb-2 text-gray-900 dark:text-gray-500 font-light
    `,
  });
