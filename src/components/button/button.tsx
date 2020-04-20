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
  type,
}) => {
  return (
    <>
      {theme === "dark" ? (
        <>
          <StyledDefaultButton
            type="submit"
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
            type="submit"
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
            type="submit"
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
            type="submit"
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
