import styled from "styled-components";
import * as types from "./types";

export const StyledPomodoroDiv = styled.div<types.PomodoroStyledProps>`
  float: ${props => (props.position === "left" ? "left" : "right")};
  width: 49%;
  min-height: 540px;
  overflow: hidden;
  background: #f8f8f8;
  box-shadow: 8px 0px 4px #3333;
  padding: 15px;
`;

export const PomodoroListContainer = styled.div`
  overflow: hidden;
  margin: 5px auto;
  padding: 10px;
  background: #fff;
  `;

export const PomodoroListChild = styled.div<types.PomodoroStyledProps>`
  width: ${props => props.percentWidth | 30}%;
  float: left;
  margin: 5px 1%;
  padding: 10px;
  border: 4px double #7a7d86;
  border-radius: 5px;
  background: #fff;
`;
