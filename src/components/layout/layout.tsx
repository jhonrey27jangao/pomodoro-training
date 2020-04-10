import React from "react";
import { LayoutProps } from "./types";
import { StyledLayoutContainer, StyledLayoutContent } from "./styles";
import { Navbar } from "../navbar/navbar";
export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <StyledLayoutContainer>
      <StyledLayoutContent>{children}</StyledLayoutContent>
    </StyledLayoutContainer>
  </>
);
