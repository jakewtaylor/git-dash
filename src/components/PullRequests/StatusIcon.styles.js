import { useTailwind } from '../../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    container: `
        w-8 h-8 absolute
        flex items-center justify-center
        rounded-full shadow
    `,

    icon: `
        leading-none font-xs
    `,
  });
