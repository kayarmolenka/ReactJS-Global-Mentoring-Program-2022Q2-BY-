import { NetflixRoulette } from '../NetflixRoulette';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NetflixRoulette />
    </footer>
  );
};
