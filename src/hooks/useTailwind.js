import { useMemo } from 'react';

export const useTailwind = styleSheet => {
  return useMemo(() => {
    return Object.entries(styleSheet).reduce((acc, [key, styles]) => {
      acc[key] = Array.isArray(styles) ? styles.join(' ') : styles;

      return acc;
    }, {});
  }, [styleSheet]);
};
