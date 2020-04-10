import React from "react";
import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledLabel
} from "./styles";
import { LabelProps } from "./types";

export const Label: React.FC<LabelProps> = ({
  type,
  theme,
  weight,
  center,
  children,
  strike,
  pointer,
  onClick,
}) => (
  <>
    {type === "h1" ? (
      <StyledHeading1 type={type} theme={theme} weight={weight} center={center} strike={strike} >
        {children}
      </StyledHeading1>
    ) : type === "h2" ? (
      <StyledHeading2 type={type} theme={theme} weight={weight} center={center} strike={strike} >
        {children}
      </StyledHeading2>
    ) : type === "h3" ? (
      <StyledHeading3 type={type} theme={theme} weight={weight} center={center} strike={strike}>
        {children}
      </StyledHeading3>
    ) : type === "h4" ? (
      <StyledHeading4 type={type} theme={theme} weight={weight} center={center} strike={strike} >
        {children}
      </StyledHeading4>
    ) : (
      <StyledLabel type={type} theme={theme} weight={weight} center={center} strike={strike} pointer={pointer} onClick={onClick}>
        {children}
      </StyledLabel>
    )}
  </>
);
