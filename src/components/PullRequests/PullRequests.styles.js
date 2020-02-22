import { useTailwind } from '../../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    pullRequests: `
        bg-gray-100 my-4 shadow-sm rounded border border-gray-300
    `,
  });
