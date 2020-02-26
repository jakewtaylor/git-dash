import React from 'react';
import { Labels } from './PullRequests/Labels';
import { useConfig } from './ConfigController/ConfigController';
import { useStyles } from './LabelFilters.styles';

export const LabelFilters = () => {
  const { labels } = useConfig();
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <p className={styles.text}>mode: {labels.filterMode}</p>
        <button onClick={labels.toggleFilterMode} className={styles.button}>
          toggle
        </button>
      </div>

      <div className={styles.section}>
        <p className={styles.text}>whitelist:</p>
        <Labels
          labels={labels.whitelist}
          buttons={({ className, label }) => (
            <button
              className={className}
              onClick={() => labels.removeFromWhitelist(label)}
            >
              Remove
            </button>
          )}
        />
        <button onClick={labels.clearWhitelist} className={styles.button}>
          clear
        </button>
      </div>

      <div className={styles.section}>
        <p className={styles.text}>blacklist:</p>
        <Labels
          labels={labels.blacklist}
          buttons={({ className, label }) => (
            <button
              className={className}
              onClick={() => labels.removeFromBlacklist(label)}
            >
              Remove
            </button>
          )}
        />
        <button onClick={labels.clearBlacklist} className={styles.button}>
          clear
        </button>
      </div>
    </div>
  );
};
