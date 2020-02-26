import React from 'react';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import RateReviewRoundedIcon from '@material-ui/icons/RateReviewRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import { useStyles } from './StatusIcon.styles';

export const StatusIcon = ({ status, ...props }) => {
  const styles = useStyles();
  const Icon = {
    COMMENTED: ChatBubbleRoundedIcon,
    CHANGES_REQUESTED: RateReviewRoundedIcon,
    APPROVED: CheckRoundedIcon,
    PENDING: AccessTimeRoundedIcon,
  }[status];

  const bgClass = {
    COMMENTED: `bg-white`,
    CHANGES_REQUESTED: `bg-red-500`,
    APPROVED: `bg-green-600`,
    PENDING: `bg-yellow-500`,
  }[status];

  const textClass = {
    COMMENTED: `text-gray-600`,
    CHANGES_REQUESTED: `text-red-100`,
    APPROVED: `text-green-100`,
    PENDING: `text-yellow-900`,
  }[status];

  return (
    <div
      className={`${bgClass} ${textClass} ${styles.container}`}
      style={{ right: '-.75rem', bottom: '-.75rem' }}
    >
      <Icon className={styles.icon} fontSize="inherit" />
    </div>
  );
};
