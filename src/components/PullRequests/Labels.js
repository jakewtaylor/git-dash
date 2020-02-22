import React from 'react';
import { useStyles } from './Labels.styles';
import { getContrastingColor } from '../../hooks/useContrastingColor';

export const Labels = ({ labels }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      {labels.map(label => (
        <p
          key={label.name}
          className={styles.tag}
          style={{
            background: `#${label.color}`,
            color: getContrastingColor(label.color),
          }}
        >
          {label.name}
        </p>
      ))}
    </div>
  );
};
