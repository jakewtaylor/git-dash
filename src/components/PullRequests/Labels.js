import React from 'react';
import { useStyles } from './Labels.styles';
import { Label } from './Label';

export const Labels = ({ labels, buttons = null, children }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      {children}

      {labels.map((label) => (
        <Label key={label.name} label={label} buttons={buttons} />
      ))}
    </div>
  );
};
