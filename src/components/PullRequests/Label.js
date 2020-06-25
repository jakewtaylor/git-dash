import React, { useState, useRef, useCallback } from 'react';
import { getContrastingColor } from '../../hooks/useContrastingColor';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { useStyles } from './Label.styles';

export const Label = ({ label, buttons = null, IconComponent }) => {
  const styles = useStyles();
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltip = useRef();

  useOnClickOutside(
    tooltip,
    useCallback(() => {
      setShowTooltip(false);
    }, []),
  );

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowTooltip(true)}
        disabled={!buttons}
        className={styles.tag}
        style={{
          background: `#${label.color}`,
          color: getContrastingColor(label.color),
        }}
      >
        {IconComponent ? (
          <IconComponent className={styles.icon} style={{ fontSize: 12 }} />
        ) : null}
        {label.name}
      </button>

      <div
        ref={tooltip}
        className={styles.tooltipWrapper}
        style={{
          transform: 'translateX(-50%)',
          display: showTooltip && buttons ? 'block' : 'none',
        }}
      >
        {buttons ? (
          <div className={styles.tooltip}>
            {buttons({
              className: styles.button,
              label,
              hideTooltip() {
                setShowTooltip(false);
              },
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
