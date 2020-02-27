import React from 'react';
import { Labels } from './PullRequests/Labels';
import { useConfig } from './ConfigController/ConfigController';
import { useStyles } from './LabelFilters.styles';
import { FilterModes } from './ConfigController/useLabels';

export const LabelFilters = () => {
  const { labels } = useConfig();
  const {
    filterMode,
    filterList,
    removeFromBlacklist,
    toggleFilterMode,
    filterEnabled,
    toggleFilter,
  } = labels;
  const styles = useStyles();

  const listEmpty = filterList.length < 1;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.selected}>
          {filterEnabled ? (
            <>
              <p className={styles.selectedLabel}>
                {filterMode === FilterModes.WHITELIST
                  ? listEmpty
                    ? 'no items in whitelist'
                    : 'showing only'
                  : listEmpty
                  ? 'no items in blacklist'
                  : 'hiding'}
              </p>
              <Labels
                labels={filterList}
                buttons={({ className, label }) => (
                  <button
                    className={className}
                    onClick={() => removeFromBlacklist(label)}
                  >
                    remove from {filterMode.toLowerCase()}
                  </button>
                )}
              />
            </>
          ) : null}
        </div>

        <div>
          {filterEnabled ? (
            <button
              className={styles.button}
              onClick={() => toggleFilterMode()}
            >
              switch to{' '}
              {filterMode === FilterModes.WHITELIST ? 'blacklist' : 'whitelist'}{' '}
              mode
            </button>
          ) : null}
          <button className={styles.button2} onClick={() => toggleFilter()}>
            {filterEnabled ? 'disable' : 'enable'} filter
          </button>
        </div>
      </div>
    </>
  );
};
