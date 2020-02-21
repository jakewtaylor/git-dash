import { useEffect, useState, useRef } from 'react';

const serialize = obj => JSON.stringify(obj);
const deserialze = str => JSON.parse(str);

const loadState = (key, initial) => {
  const stored = localStorage.getItem(key);

  return stored ? deserialze(stored) : initial;
};

const saveState = (key, value) => localStorage.setItem(key, serialize(value));

export const useRememberedState = (name, initial) => {
  const key = useRef(name);

  const [state, setState] = useState(() => loadState(key.current, initial));

  useEffect(() => {
    saveState(key.current, state);
  }, [state]);

  return [state, setState];
};
