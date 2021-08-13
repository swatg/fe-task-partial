import React from 'react';
// Style
import styles from './style/header.module.css';

function Header() {
  return (
    <header className={`${styles.container} wrapper`}>
      <div className="wrapper__content">
        <h1 className={styles.header}>
        <span>
          <span role="img" aria-label="Popcorn emoji">
            🍿
          </span>{' '}
          Now playing
        </span>
      </h1>
      </div>
    </header>
  );
}

export default Header;