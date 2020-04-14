import React from "react";
import { StyledInput } from "./styles";
import { InputProps } from "./types";

const InputComponent = React.memo(
  ({
    onChange,
    width,
    type,
    placeholder,
    value,
    id,
    height,
    center,
    name,
  }: InputProps) => {
    return (
      <StyledInput
        type={type}
        onChange={onChange}
        width={width}
        placeholder={placeholder}
        value={value}
        id={id}
        center={center}
        height={height}
        name={name}
      />
    );
  }
);

export const Input: React.FC<InputProps> = ({
  onChange,
  width,
  height,
  type,
  placeholder,
  value,
  id,
  center,
  name,
}) => {
  return (
    <InputComponent
      onChange={onChange}
      width={width}
      height={height}
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
      center={center}
      name={name}
    />
  );
};
