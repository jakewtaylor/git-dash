import { useTailwind } from '../../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    container: `
        flex flex-row items-center
    `,

    tag: `
        leading-none text-xs px-2 py-1
        rounded-full font-semibold
        shadow-inner mr-1
    `,
  });
