import { useEffect, useState } from 'react';

export const useDebounced = (value, timeout = 500) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, timeout);

    return () => clearTimeout(timer);
  }, [value, timeout]);

  return debounced;
};
