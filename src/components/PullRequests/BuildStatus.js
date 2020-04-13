import React from 'react';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

export const BuildStatus = ({ status }) => {
  const Icon = {
    SUCCESS: CheckRoundedIcon,
    ERROR: CloseRoundedIcon,
    FAILURE: CloseRoundedIcon,
    PENDING: FiberManualRecordIcon,
  }[status];

  const colorClass = {
    SUCCESS: 'text-green-600',
    ERROR: 'text-red-600',
    FAILURE: 'text-red-600',
    PENDING: `text-yellow-600`,
  }[status];

  return Icon ? (
    <span className={`ml-1 -mt-px ${colorClass}`}>
      <Icon fontSize="small" />
    </span>
  ) : null;
}