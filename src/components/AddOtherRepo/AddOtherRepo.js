import React from 'react';
import { useState } from 'react';
import { useModal, Modal, ModalTransition } from 'react-simple-hook-modal';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { useStyles } from './AddOtherRepo.styles';
import { useRepoSearch } from '../../hooks/queries/useRepoSearch';
import { useDebounced } from '../../hooks/useDebounced';
import { RepoList } from '../RepoList';
import { useConfig } from '../ConfigController/ConfigController';

export const AddOtherRepo = () => {
  const styles = useStyles();
  const { isModalOpen, openModal, closeModal } = useModal();
  const { selectedRepos } = useConfig();

  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);

  const selectedRepoNames = selected.map((repo) => repo.nameWithOwner);

  const { loading, repos } = useRepoSearch(useDebounced(search));

  const selectRepo = (repo) => (e) => {
    e.preventDefault();

    setSelected((prev) => [...prev, repo]);
  };

  const handleSave = (e) => {
    e.preventDefault();

    selectedRepos.addRepos(selected);
    closeModal();
    setSearch('');
    setSelected([]);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={openModal}>
        <p className={styles.text}>Add Other Repo</p>
      </button>

      <Modal
        id="add-other-repo-modal"
        isOpen={isModalOpen}
        onBackdropClick={closeModal}
        transition={ModalTransition.TOP_DOWN}
      >
        <div className={styles.modalInner}>
          <div className={styles.inputContainer}>
            <div className={styles.iconContainer}>
              <SearchRoundedIcon className={styles.icon} />
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.input}
              placeholder="Search for a repo, e.g. jakewtaylor/git-dash"
            />
          </div>

          {loading || repos.length < 1 ? (
            <p className={styles.emptyText}>
              {loading ? 'Searching...' : 'Start typing to see results...'}
            </p>
          ) : (
            <div>
              <RepoList
                repos={repos.filter(
                  (r) =>
                    !selectedRepoNames.includes(r.nameWithOwner) &&
                    !selectedRepos.containsRepo(r),
                )}
                onRepoClick={selectRepo}
              />
            </div>
          )}

          {selected.length > 0 ? (
            <>
              <p className={styles.text}>Selected:</p>

              <RepoList repos={selected} />
            </>
          ) : null}

          <div className={styles.buttonContainer}>
            <button
              className={styles.saveButton}
              disabled={selected.length < 1}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
