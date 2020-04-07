import styled from "styled-components";
import { InputProps } from "./types";

export const StyledInput = styled.input<InputProps>`
  width: ${props => props.width}px;
  display: inline;
  font-family: inherit;
  margin-left: 5px;
  border-radius: 5px;
  padding: 5px 5px;
  box-sizing: border-box;
  border: 1px solid #7a7d86;
  -webkit-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  outline: none;
  font-size: 12px;
  &:focus {
    border: 2px solid #03bb85;
  }
`;
