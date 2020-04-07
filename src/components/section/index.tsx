import React from "react";
import { StyledSection, StyledImageDiv, StyledDivContent } from "./styles";
import { SectionProps } from "./types";
export const Section: React.FC<SectionProps> = ({ children }) => (
  <StyledSection>
    <StyledImageDiv>
      <StyledDivContent>{children}</StyledDivContent>
    </StyledImageDiv>
  </StyledSection>
);
