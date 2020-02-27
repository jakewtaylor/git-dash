import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { useConfig } from './ConfigController/ConfigController';
import { useStyles } from './DarkModeToggle.styles';

export const DarkModeToggle = () => {
  const { darkMode } = useConfig();
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <WbSunnyIcon className={styles.icon} fontSize="small" />
      <button
        onClick={() => darkMode.toggleDarkMode()}
        className={styles.switch}
      >
        <div
          className={[
            styles.knob,
            darkMode.isDarkMode ? styles.knobActive : styles.knobInactive,
          ]}
        />
      </button>
      <Brightness3Icon className={styles.icon} fontSize="small" />
    </div>
  );
};
