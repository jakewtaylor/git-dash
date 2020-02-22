import { useMemo } from 'react';

const hexToRgb = hex => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) =>
    [r, r, g, g, b, b].join(''),
  );

  const [, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);

  return [r, g, b].map(n => parseInt(n, 16));
};

export const getContrastingColor = color => {
  const [r, g, b] = hexToRgb(color);

  const o = Math.round((r * 299 + g * 587 + b * 114) / 1000);
  return o > 125 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)';
};

export const useContrastingColor = color =>
  useMemo(() => {
    return getContrastingColor(color);
  }, [color]);
