import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';
import { createStore } from '../../store';

jest.mock('formik');

describe('Modal', () => {
  const setIsOpenModal = jest.fn();
  const setSuccessModal = jest.fn();

  it('should render Add movie when isOpenModal equal true', () => {
    render(
      <Provider store={createStore()}>
        <Modal
          textHeader="Add Movie"
          isOpenModal={true}
          setIsOpenModal={setIsOpenModal}
          setSuccessModal={setSuccessModal}
        />
      </Provider>,
    );

    expect(screen.getByText('Add Movie')).toBeInTheDocument();
  });

  it('should not render Add movie when isOpenModal equal true', () => {
    render(
      <Provider store={createStore()}>
        <Modal
          textHeader="Add Movie"
          isOpenModal={false}
          setIsOpenModal={setIsOpenModal}
          setSuccessModal={setSuccessModal}
        />
      </Provider>,
    );

    expect(screen.queryByText('Add Movie')).not.toBeInTheDocument();
  });
});
