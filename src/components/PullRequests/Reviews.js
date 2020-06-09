import React, { useMemo } from 'react';
import { StatusIcon } from './StatusIcon';
import { useStyles } from './Reviews.styles';

export const Reviews = ({ reviews }) => {
  const styles = useStyles();

  const reviewsGroupedByUser = useMemo(() => {
    return Object.values(
      reviews.reduce((acc, review) => {
        if (!acc[review.author.login]) {
          acc[review.author.login] = {
            author: review.author,
            reviews: [],
          };
        }

        // Ignore comments
        if (review.state !== 'COMMENTED') {
          acc[review.author.login].reviews.push(review);
        }

        return acc;
      }, {}),
    ).filter((group) => group.reviews.length > 0);
  }, [reviews]);

  return (
    <>
      <div className={styles.reviews}>
        {reviewsGroupedByUser.map(({ author, reviews }) => (
          <div className={styles.review} key={author.login}>
            <img
              src={author.avatarUrl}
              alt={author.login}
              className={styles.reviewerAvatar}
            />

            <div>
              {reviews.map((review, i) => (
                <StatusIcon
                  key={review.id}
                  status={review.state}
                  offset={i}
                  last={i === reviews.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
