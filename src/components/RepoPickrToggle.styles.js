import { useTailwind } from '../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    button: `
      py-2 px-1 mr-8
      border-b border-t border-gray-400 dark:border-gray-850
      text-gray-800 dark:text-white text-sm leading-loose
      flex justify-between w-full
      focus:outline-none
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
    `,
  });
