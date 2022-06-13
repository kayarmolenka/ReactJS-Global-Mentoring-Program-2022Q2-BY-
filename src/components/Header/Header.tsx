import { useState } from 'react';
import { SearchForm, NetflixRoulette, Button, Modal, CongratulationsModal } from '../index';
import { ButtonType } from '../../models';
import { ADD_MOVIE_TEXT } from '../../constants';

import styles from './Header.module.scss';

export const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSuccessModal, setSuccessModal] = useState(false);

  const addMovieHandle = () => {
    setIsOpenModal(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerBot}>
        <NetflixRoulette />
        <Button
          text={ADD_MOVIE_TEXT}
          onClick={addMovieHandle}
          type={ButtonType.SUBMIT}
          className={styles.headerAddMovieBtn}
        />
        <Modal
          textHeader="Add Movie"
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          setSuccessModal={setSuccessModal}
        />
      </div>
      {isSuccessModal && (
        <CongratulationsModal isOpenModal={isSuccessModal} setIsOpenModal={setSuccessModal} />
      )}
      <SearchForm />
    </header>
  );
};
