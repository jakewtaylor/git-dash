import React from 'react';
import { useStyles } from './Layout.styles';

export const Layout = ({ children }) => {
  const styles = useStyles();

  return <div className={styles.container}>{children}</div>;
};
