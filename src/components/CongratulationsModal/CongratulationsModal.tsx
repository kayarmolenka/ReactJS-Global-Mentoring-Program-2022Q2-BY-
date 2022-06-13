import { useCallback } from 'react';
import { faXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CongratulationsModal.module.scss';

interface IModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (data: boolean) => void;
}

export const CongratulationsModal = (props: IModalProps) => {
  const { isOpenModal, setIsOpenModal } = props;
  const closeModalWindow = useCallback(() => {
    setIsOpenModal(false);
    document.body.style.overflow = 'auto';
  }, [setIsOpenModal]);

  const stopClosed = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return isOpenModal ? (
    <div className={styles.modalShadow} onClick={closeModalWindow}>
      <div className={styles.modal} onClick={stopClosed}>
        <div className={styles.modalCloseWrapper}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.modalCloseIcon}
            onClick={closeModalWindow}
          />
        </div>
        <div className={styles.modalContent}>
          <div>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.modalCongratulationsIcon} />
          </div>
          <h2>Congratulations!</h2>
          <p>The movie has been added to database successfully </p>
        </div>
      </div>
    </div>
  ) : null;
};