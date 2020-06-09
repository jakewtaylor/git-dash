import { useTailwind } from '../../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    pullRequest: `
        p-6
        border-b border-gray-300 dark:border-gray-750
        last:border-b-0
    `,

    preTitle: `
        flex flex-row items-center mb-1
    `,

    owner: `
        flex flex-row items-center
    `,

    ownerAvatar: `
        w-6 h-6 rounded-full shadow mr-1
    `,

    repo: `
        text-base text-gray-800 dark:text-gray-500 leading-none mr-2
    `,

    titleBar: `
        flex flex-row justify-between items-center mb-1
    `,

    title: `
        text-gray-900 font-semibold text-lg
        dark:text-gray-300
        block p-1 -mx-1
    `,

    author: `
        inline-flex flex-row items-center
        relative
        bg-gray-400 dark:bg-gray-850
        rounded-full py-2 pl-3 pr-12
        shadow-inner
    `,

    authorAvatar: `
        w-10 h-10 rounded-full
        absolute right-0
        shadow
    `,

    authorName: `
        text-sm leading-none whitespace-no-wrap
        text-gray-900 dark:text-gray-400
    `,

    timestamps: `
        text-sm leading-none text-gray-700 dark:text-gray-500
        pointer-events-none
    `,

    branches: `
        inline-flex flex-row items-center
        text-xs px-2 mb-2 rounded
        bg-gray-300 text-gray-800
        dark:bg-gray-500 dark:text-gray-900
    `,
  });
