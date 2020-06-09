import { useTailwind } from '../../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    reviews: `
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
