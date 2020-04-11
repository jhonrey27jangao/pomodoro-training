import styled from "styled-components";
import * as types from "./types";

export const StyledPomodoroDiv = styled.div<types.PomodoroStyledProps>`
  display: block;
  width: 90%;
  overflow: hidden;
  margin: 20px auto 0;
  padding: 15px;
`;

export const PomodoroListChild = styled.div<types.PomodoroStyledProps>`
  float: ${(props) => (props.float ? `${props.float}` : "none")};
  width: ${(props) => props.percentWidth}%;
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
  margin: 10px auto 0;
`;

export const TableContainer = styled.div`
  margin-top: 60px;

  & table {
    width: 100%;
    border-collapse;
    border-width: 0;
    text-align: left;
  }

  & table th {
    padding: 1rem 2.5rem;
    color: #000000;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 700;
    border-bottom: 1px solid #e0e0e0;

  }

  & table td {
    padding: 1rem 2.5rem;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }
`;
