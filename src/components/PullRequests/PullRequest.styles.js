import { useTailwind } from '../../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    pullRequest: `
        p-6
        border-b border-gray-300
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
        text-base text-gray-800 leading-none mr-2
    `,

    titleBar: `
        flex flex-row justify-between items-center mb-1
    `,

    title: `
        text-gray-900 font-semibold text-lg
        block p-1 -mx-1
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
        text-sm leading-none text-gray-900 whitespace-no-wrap
    `,

    timestamps: `
        text-sm leading-none text-gray-700
        pointer-events-none
    `,

    reviewers: `
        flex flex-row mt-3
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
