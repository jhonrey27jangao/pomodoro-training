import styled from "styled-components";

export const StyledSideBar = styled.div`
  width: 250px;
  z-index: 100;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: column nowrap;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  background-color: #151515;
  padding: 35px 35px 0;
  overflow-y: auto;
  overflow-x: hidden;
  vertical-align: top;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;

  & a {
    display: block;
    text-decoration: none;
    border: none;
  }

  & a:hover {
    color: #fff !important;
  }
`;

export const StyledSideBarContent = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: column nowrap;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  -webkit-flex: 1 1 0%;
  -ms-flex: 1 1 0%;
  flex: 1 1 0%;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  max-width: 100%;
  background-color: #151515;
  margin-top: 3.2rem;

  & .sideBar-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: "Heebo", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  & .sideBar-nav li {
    display: block;
    padding: 0 2rem 0 0;
    width: 100%;
    position: relative;
  }

  & .sideBar-nav li a {
    display: block;
    color: rgba(255, 255, 255, 0.6);
    line-height: 44px;
  }

  & .sideBar-social {
    list-style: none;
    margin: 4rem 0 0 0;
    padding: 0 0 4.4rem 0;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

  & .sideBar-social {
    margin-right: 2px;
  }

  & .sideBar-social a {
    display: block;
    background-color: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.5);
    height: 2.5rem;
    width: 2.5em;
    margin: 3px;
    border-radius: 50%;
    position: relative;
  }

  & .sideBar-social span {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    border: 0;
    position: absolute;
  }

  & .sideBar-social a:after {
    z-index: 1;
    content: "";
    display: block;
    height: 1rem;
    width: 1rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    transition: all 0.3s;
    position: absolute;
    left: 50%;
    right: 0;
    top: 50%;
  }

  & .sideBar-social .ss-fb a:after {
    background-image: url(https://www.styleshout.com/templates/preview/Typerite_1_0_0/images/icons/social/icon-facebook.svg);
  }

  & .sideBar-social .ss-insta a:after {
    background-image: url(https://www.styleshout.com/templates/preview/Typerite_1_0_0/images/icons/social/icon-instagram.svg);
  }

  & .sideBar-social .ss-dribble a:after {
    background-image: url(https://www.styleshout.com/templates/preview/Typerite_1_0_0/images/icons/social/icon-dribbble.svg);
  }

  & .sideBar-social .ss-twitter a:after {
    background-image: url(https://www.styleshout.com/templates/preview/Typerite_1_0_0/images/icons/social/icon-twitter.svg);
  }
`;

export const StyledLogo = styled.div`
  margin: 0;
  padding: 0;

  a {
    display: block;
    font-weight: 700;
    font-size: 35px;
    color: #fff;
    text-decoration: none;
  }
`;
