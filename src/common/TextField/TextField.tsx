import React from "react";
import cn from "classnames";
import { errorMsgClass, inputClass, labelClass } from "./styles";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  required?: boolean;
  errorMsg?: string | null;
  onBlur?: () => void;
  onFocus?: () => void;
  inputFieldClass?: string;
  type?: string;
}

const TextField = (props: Props): React.ReactElement => {
  const {
    value,
    onChange,
    label,
    placeholder,
    errorMsg,
    className,
    onBlur,
    onFocus,
    inputFieldClass = inputClass,
    autoFocus,
    type = "text",
  } = props;
  return (
    <div className={cn(className, "flex flex-col")}>
      <label className={labelClass}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputFieldClass}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        autoFocus={autoFocus}
      />
      <p className={errorMsgClass}>{errorMsg}</p>
    </div>
  );
};
export default TextField;
