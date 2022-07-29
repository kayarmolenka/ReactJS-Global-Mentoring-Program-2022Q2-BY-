import { fireEvent, render, screen } from '@testing-library/react';
import { CongratulationsModal } from './CongratulationsModal';

describe('CongratulationsModal', () => {
  const handleOpenModal = jest.fn();

  it('should render modal text as "You add movie!" when isOpenModal equal true', () => {
    render(
      <CongratulationsModal
        isOpenModal={true}
        setIsOpenModal={handleOpenModal}
        modalText="You add movie!"
      />,
    );

    expect(screen.getByText('You add movie!')).toBeInTheDocument();
  });

  it('should not render modal text as "You add movie!" when isOpenModal equal false', () => {
    render(
      <CongratulationsModal
        isOpenModal={false}
        setIsOpenModal={handleOpenModal}
        modalText="You add movie!"
      />,
    );

    expect(screen.queryByText('You add movie!')).not.toBeInTheDocument();
  });

  it('should call handleOpenModal after click on close modal icon', () => {
    render(
      <CongratulationsModal
        isOpenModal={true}
        setIsOpenModal={handleOpenModal}
        modalText="You add movie!"
      />,
    );

    fireEvent.click(screen.getByTestId('closeIcon'));

    expect(handleOpenModal).toHaveBeenCalled();
  });
});
