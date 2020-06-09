import { useTailwind } from '../../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    pullRequests: `
        bg-gray-100 dark:bg-gray-800
        border-gray-300 dark:border-gray-750
        mb-4 shadow-sm rounded border
    `,

    empty: `
      text-center p-8
    `,

    emptyText: `
      text-gray-700 dark:text-gray-500
    `,
  });
