import styled from "styled-components";
import { ButtonProps } from "./types";

export const SpanBtn = styled.span`
  position: relative;
  z-index: 1;
`;

export const StyledNonDefaultBtn = styled.button<ButtonProps>`
    margin: 5px auto;
    width: ${(props) => (props.width ? `${props.width}px` : "100%")};
    border: none;
    border-radius: 30px;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 13px;
    background-color: ${(props) =>
      props.theme === "success" ? "#222;" : "#7e0109;"}
    padding: 5px 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.20);

    &:disabled {
      opacity: 0.8;
    }

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 490%;
        width: 140%;
        background: #111;
        -webkit-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;
        -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
        transform: translateX(-98%) translateY(-25%) rotate(45deg);
        background-color: none;
        opacity: 0;
    }
    &:hover:after {
        -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
        transform: translateX(-9%) translateY(-25%) rotate(45deg);
        opacity: 1;
    }`;

export const StyledDefaultButton = styled.button<ButtonProps>`
  margin: 10px auto;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  border: ${(props) =>
    props.theme === "default" ? `3px solid #000` : "3px solid #fff"};
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  color: ${(props) => (props.theme === "default" ? `#000` : "#fff")};
  font-weight: 700;
  font-size: 13px;
  background-color: ${(props) =>
    props.theme === "default"
      ? "#fff"
      : props.theme === "dark"
      ? "#000"
      : "#7e0109"};
  padding: 20px 15px;
  border-radius: ${(props) => (props.rounded ? `100%` : "0")};
  &:hover {
    filter: invert();
  }
`;
