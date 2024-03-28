import React from "react";
import cn from "classnames";
import { getButtonStyles } from "./styles";

interface Props {
  buttonText: string;
  onClick?: () => void;
  size: string;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = (props: Props): React.ReactElement => {
  const {
    buttonText,
    onClick,
    className,
    disabled,
    size,
    type = "button",
  } = props;

  return (
    <button
      onClick={onClick}
      className={cn(
        getButtonStyles(size),
        className,
        disabled && "cursor-not-allowed active:outline-none "
      )}
      disabled={disabled}
      type={type}
    >
      {buttonText}
    </button>
  );
};
export default Button;
