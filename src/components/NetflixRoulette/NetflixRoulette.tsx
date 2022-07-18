import { NavLink } from 'react-router-dom';

import styles from './NetflixRoulette.module.scss';

export const NetflixRoulette = () => {
  return (
    <div className={styles.logo}>
      <NavLink to="/">
        <strong>netflix</strong>roulette
      </NavLink>
    </div>
  );
};
