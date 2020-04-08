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
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Opera and Firefox */
`;

export const PomodoroListContainer = styled.div`
  overflow: hidden;
  margin: 5px auto;
  padding: 10px;
  background: #fff;
  `;

export const PomodoroListChild = styled.div<types.PomodoroStyledProps>`
  width: ${props => props.percentWidth | 30}%;
  height: ${props => props.height}px;
  float: left;
  margin: 5px 1%;
  padding: 10px;
  border: 4px double #7a7d86;
  border-radius: 5px;
  background: #fff;
`;
