import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    text: `
        mb-2 mt-4 text-gray-900 font-light
    `,
  });
