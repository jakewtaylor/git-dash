import React, { useState } from 'react';
import { useConfig } from './ConfigController/ConfigController';
import { useStyles } from './TokenGate.styles';

export const TokenGate = ({ children }) => {
  const { auth } = useConfig();
  const styles = useStyles();

  const [token, setToken] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    auth.setToken(token);
  };

  return auth.token ? (
    children
  ) : (
    <div className={styles.container}>
      <p className={styles.text}>
        Welcome! Before you can get started, you need to supply us with a
        Personal Access Token so we can see your repositories.
        <br />
        <a
          href="https://github.com/settings/tokens/new?scopes=repo&description=git-dash"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Click here to generate one on Github.
        </a>
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={token}
          onChange={e => setToken(e.target.value)}
          placeholder="Paste PAT Here"
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Go
        </button>
      </form>
    </div>
  );
};
