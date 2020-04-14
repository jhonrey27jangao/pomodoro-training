import React from "react";
import { ContentType } from "./types";
import { StyledContent } from "./styles";

export const Content: React.FC<ContentType> = ({ title, children }) => (
  <StyledContent title={title}>
    <h1 className="title-page">{title}</h1>
    {children}
  </StyledContent>
);
