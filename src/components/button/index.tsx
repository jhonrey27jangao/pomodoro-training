import React from "react";
import { ButtonProps } from "./types";
import { SpanBtn, StyledBtn } from "./styles";

export const Button: React.FC<ButtonProps> = ({
  width,
  theme,
  onClick,
  children,
  disabled
}) => {
  return (
    <>
      <StyledBtn width={width} theme={theme} onClick={onClick} disabled={disabled}>
        <SpanBtn>{children}</SpanBtn>
      </StyledBtn>
    </>
  );
};
