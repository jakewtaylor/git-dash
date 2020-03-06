import React from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { useStyles } from './RepoPickrToggle.styles';

export const RepoPickerToggle = ({ open, selectedCount, onClick }) => {
  const styles = useStyles();
  const text = selectedCount === 0 && !open
    ? 'Click to select repositories you want to see'
    : ` ${selectedCount === 1 ? 'repository' : 'repositories'} selected`;


  return (
    <button className={styles.button} onClick={onClick}>
      <div className={[styles.icon, open ? styles.open : null]}>
        <ExpandLess />
      </div>
      <div>
        <span className={styles.count}>{open ? selectedCount : ''}</span>
        {text}
      </div>
    </button>
  );
};
