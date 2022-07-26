import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Modal } from './Modal';
import { createStore } from '../../store';

describe('Modal', () => {
  const setIsOpenModal = jest.fn();
  const setSuccessModal = jest.fn();

  it('should render Add movie when isOpenModal equal true', () => {
    const { asFragment } = render(
      <Provider store={createStore()}>
        <Modal
          textHeader="Add Movie"
          isOpenModal={true}
          setIsOpenModal={setIsOpenModal}
          setSuccessModal={setSuccessModal}
        />
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('Add Movie')).toBeInTheDocument();
  });

  it('should not render Add movie when isOpenModal equal true', () => {
    act(() => {
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
    });

    expect(screen.queryByText('Add Movie')).not.toBeInTheDocument();
  });
});
