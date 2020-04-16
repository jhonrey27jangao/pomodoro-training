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
    props,
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
        props={props}
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
  props,
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
      props={props}
    />
  );
};
