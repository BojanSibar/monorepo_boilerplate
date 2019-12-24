import React, { MouseEvent } from "react";

export interface ButtonProps {
  disabled?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick
}) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
