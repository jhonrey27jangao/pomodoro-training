import styled from "styled-components";
import { InputProps } from "./types";

export const StyledInput = styled.input<InputProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  display: block;
  height: ${(props) => (props.height === "big" ? "64" : "32")}px;
  padding: 15px 0;
  border: 0;
  outline: none;
  color: #000000;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  line-height: 3.2rem;
  max-width: 100%;
  background: transparent;
  border-bottom: 1px solid #c3c3c3;
  transition: all 0.3s ease-in-out;
  text-align: ${(props) => (props.center === true ? "center" : "left")};
`;
