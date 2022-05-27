interface ButtonProps {
  text: string;
  onClick: () => void;
  type: 'submit' | 'reset' | 'button' | undefined;
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
