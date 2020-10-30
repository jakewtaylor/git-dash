import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Label } from './PullRequests/Label';
import { useConfig } from './ConfigController/ConfigController';

export const DraftLabel = ({ plural = false }) => {
  const { drafts } = useConfig();

  return (
    <Label
      label={{ name: `draft${plural ? 's' : ''}`, color: 'CBD5E0' }}
      IconComponent={AccessTimeIcon}
      buttons={({ className, hideTooltip }) => (
        <>
          <button
            className={className}
            onClick={() => {
              drafts.toggleWhitelisted();
              hideTooltip();
            }}
          >
            {drafts.whitelisted ? 'remove from' : 'add to'} whitelist
          </button>

          <button
            className={className}
            onClick={() => {
              drafts.toggleBlacklisted();
              hideTooltip();
            }}
          >
            {drafts.blacklisted ? 'remove from' : 'add to'} blacklist
          </button>
        </>
      )}
    />
  );
};
