import { ButtonType } from '../../models';

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: ButtonType;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { text, onClick, type, className } = props;

  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
};
