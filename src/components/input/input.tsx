import React from "react";
import { StyledInput } from "./styles";
import { InputProps } from "./types";

const InputComponent = React.memo(
  ({ onChange, width, type, placeholder, value,id }: InputProps) => {
    return (
      <StyledInput
        type={type}
        onChange={onChange}
        width={width}
        placeholder={placeholder}
        value={value}
        id={id}
      />
    );
  }
);

export const Input: React.FC<InputProps> = ({
  onChange,
  width,
  type,
  placeholder,
  value,
  id
}) => {
  return (
    <InputComponent
      onChange={onChange}
      width={width}
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
    />
  );
};
