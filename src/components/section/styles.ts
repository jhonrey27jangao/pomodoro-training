import styled from "styled-components";

export const StyledSection = styled.section`
  box-shadow: 0 1rem 4rem 0;
  color: #ffffff;
  position: relative;
  text-align: center;
`;

export const StyledImageDiv = styled.div`
  min-height: 300px;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  padding: 20px;

  &:after {
    -moz-transition: opacity 1.3125s ease-in-out;
    -webkit-transition: opacity 1.3125s ease-in-out;
    -ms-transition: opacity 1.3125s ease-in-out;
    transition: opacity 1.3125s ease-in-out;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(images/overlay.png), url(images/overlay.png),
      linear-gradient(45deg, #7b64b5, #b66e66);
    opacity: 0;
    z-index: 1;
  }

  &:before {
    -moz-transition: opacity 1.3125s ease-in-out;
    -webkit-transition: opacity 1.3125s ease-in-out;
    -ms-transition: opacity 1.3125s ease-in-out;
    transition: opacity 1.3125s ease-in-out;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(images/overlay.png), url(images/overlay.png),
      linear-gradient(45deg, #a480ff, #ff8f83);
    opacity: 0.7;
    z-index: 1;
  }
`;

export const StyledDivContent = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  color: #7a7d86;
`;
