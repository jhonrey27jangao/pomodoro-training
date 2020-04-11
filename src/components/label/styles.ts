import styled from "styled-components";
import { LabelProps } from "./types";

export const StyledHeading1 = styled.h1<LabelProps>`
  font-size: 50px;
  vertical-align: baseline;
  font-weight: ${(props) => (props.weight === "bold" ? "700" : "100")};
  text-align: ${(props) => props.align};
  text-decoration: ${(props) => (props.strike ? "line-through" : "none")};
`;

export const StyledHeading2 = styled.h2<LabelProps>`
  font-size: 30px;
  font-family: inherit;
  vertical-align: baseline;
  color: ${(props) => (props.theme === "light" ? "#fff" : "#7a7d86")};
  font-weight: ${(props) => (props.weight === "bold" ? "900" : "100")};
  text-align: ${(props) => props.align};
  text-decoration: ${(props) => (props.strike ? "line-through" : "none")};
`;

export const StyledHeading3 = styled.h3<LabelProps>`
  font-size: 21px;
  font-family: inherit;
  vertical-align: baseline;
  color: ${(props) => (props.theme === "light" ? "#fff" : "#7a7d86")};
  font-weight: ${(props) => (props.weight === "bold" ? "900" : "100")};
  text-align: ${(props) => props.align};
  text-decoration: ${(props) => (props.strike ? "line-through" : "none")};
`;

export const StyledHeading4 = styled.h4<LabelProps>`
  font-family: inherit;
  vertical-align: baseline;
  color: ${(props) => (props.theme === "light" ? "#fff" : "#7a7d86")};
  font-weight: ${(props) => (props.weight === "bold" ? "900" : "100")};
  text-align: ${(props) => props.align};
  text-decoration: ${(props) => (props.strike ? "line-through" : "none")};
`;

export const StyledLabel = styled.p<LabelProps>`
  display: inline;
  font-family: inherit;
  vertical-align: baseline;
  color: ${(props) => (props.theme === "light" ? "#fff" : "#7a7d86")};
  font-weight: ${(props) => (props.weight === "bold" ? "900" : "100")};
  text-align: ${(props) => props.align};
  text-decoration: ${(props) => (props.strike ? "line-through" : "none")};
  cursor: ${(props) => (props.pointer ? "pointer" : "none")};
`;
