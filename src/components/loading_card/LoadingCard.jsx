import React from 'react';
import styles from './LoadingCard.module.css';
import loader_icon from '../../assets/loader_icon.svg';
import rendesco_grid_logo from '../../assets/rendesco_grid_logo.svg';

function LoadingCard() {
  return (
    <div className={styles.container}>
      <div className={styles.loadingFrame}>
        <img className={styles.rendescoLoaderIcon} src={loader_icon} alt="Loading icon" />
        <div className={styles.loading}>Loading...</div>
      </div>
      <div className={styles.overlay} />
      <img className={styles.rendescoGridLogoIcon} src={rendesco_grid_logo} alt="Rendesco Grid Logo" />
    </div>
  );
}

export default LoadingCard;
