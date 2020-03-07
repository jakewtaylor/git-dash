import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    button: `
      bg-gray-100 dark:bg-gray-800
      border-gray-300 dark:border-gray-750
      mb-4 py-2 px-4 shadow-sm rounded border
      text-gray-800 dark:text-white text-sm leading-loose
      flex justify-between w-full
    `,
    icon: `
      transition transition-transform duration-200 ease-in-out
      transform rotate-90
    `,
    open: `
       rotate-180
    `,
    count: `
       font-bold
    `
  });
