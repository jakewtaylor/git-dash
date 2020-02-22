import { useTailwind } from '../../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    pullRequest: `
        p-6
        border-b border-gray-300
    `,

    repo: `
        text-base text-gray-800
    `,

    titleBar: `
        flex flex-row justify-between items-center mb-2
    `,

    title: `
        text-gray-900 font-semibold text-lg
    `,

    author: `
        inline-flex flex-row items-center
        relative
        bg-gray-400 rounded-full py-2 pl-3 pr-12
        shadow-inner
    `,

    authorAvatar: `
        w-10 h-10 rounded-full
        absolute right-0
        shadow
    `,

    authorName: `
        text-sm leading-none text-gray-900
    `,

    reviewers: `
        flex flex-row
    `,

    review: `
        relative mr-4
    `,

    reviewerAvatar: `
        w-10 h-10 rounded-full
        shadow
    `,

    reviewStatus: `
        absolute
    `,
  });
