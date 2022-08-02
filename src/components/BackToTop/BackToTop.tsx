import { useEffect, useState } from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';
import classNames from 'classnames';

import styles from './BackToTop.module.scss';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const setButtonVisibility = () => {
    const scrolled = window.scrollY;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      setVisible(true);
    }
    if (scrolled < coords) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setButtonVisibility();
    window.addEventListener('scroll', setButtonVisibility);

    return () => {
      window.removeEventListener('scroll', setButtonVisibility);
    };
  }, [visible, setButtonVisibility]);

  return (
    <button
      className={classNames(`${styles.backToTopButton}`, {
        [styles.backToTopButtonVisible]: visible,
      })}
      onClick={scrollToTop}
    >
      <NavigationIcon sx={{ mr: 1 }} />
      Navigate
    </button>
  );
};
