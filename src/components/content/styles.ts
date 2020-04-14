import { ContentType } from "./types";
import styled from "styled-components";

export const StyledContent = styled.div<ContentType>`
  position: relative;
  margin-left: 250px;
  padding: 70px;
  font-family: "Heebo", sans-serif;

  .title-page {
    position: fixed;
    top: 40px;
    left: 20%;
    font-size: 30px;
    font-weight: bold;
  }
`;
