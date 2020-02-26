import { useTailwind } from '../../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    container: `
        flex flex-row items-center
    `,
  });
