import { SearchForm, NetflixRoulette, Button, Modal, CongratulationsModal } from '../../index';
import { ADD_MOVIE_TEXT } from '../../../constants';
import { ButtonType } from '../../../models';

import styles from './HeaderComponent.module.scss';

export interface IHeaderComponentProps {
  isOpenModal: boolean;
  isSuccessModal: boolean;
  setSuccessModal: (param: boolean) => void;
  setIsOpenModal: (param: boolean) => void;
  addMovieHandle: () => void;
}
export const HeaderComponent = (props: IHeaderComponentProps) => {
  const { isSuccessModal, setSuccessModal, isOpenModal, addMovieHandle, setIsOpenModal } = props;
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
