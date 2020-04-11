import React from "react";
import { ButtonProps } from "./types";
import { SpanBtn, StyledDefaultButton, StyledNonDefaultBtn } from "./styles";

export const Button: React.FC<ButtonProps> = ({
  width,
  theme,
  onClick,
  children,
  disabled,
  rounded,
}) => {
  return (
    <>
      {" "}
      {theme === "dark" ? (
        <>
          <StyledDefaultButton
            width={width}
            theme={theme}
            onClick={onClick}
            disabled={disabled}
            rounded={rounded}
          >
            <SpanBtn>{children}</SpanBtn>
          </StyledDefaultButton>
        </>
      ) : theme === "default" ? (
        <>
          <StyledDefaultButton
            width={width}
            theme={theme}
            onClick={onClick}
            disabled={disabled}
            rounded={rounded}
          >
            <SpanBtn>{children}</SpanBtn>
          </StyledDefaultButton>
        </>
      ) : theme === "success" ? (
        <>
          <StyledNonDefaultBtn
            width={width}
            theme={theme}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </StyledNonDefaultBtn>
        </>
      ) : (
        <>
          <StyledNonDefaultBtn
            width={width}
            theme={theme}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </StyledNonDefaultBtn>
        </>
      )}
    </>
  );
};
