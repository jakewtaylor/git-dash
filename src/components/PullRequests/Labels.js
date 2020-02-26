import React from 'react';
import { useStyles } from './Labels.styles';
import { Label } from './Label';

export const Labels = ({ labels, buttons = null }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      {labels.map(label => (
        <Label key={label.name} label={label} buttons={buttons} />
      ))}
    </div>
  );
};
