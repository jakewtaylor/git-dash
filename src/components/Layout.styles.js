import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    container: `
      px-8 max-w-5xl mx-auto h-full
    `,
  });
