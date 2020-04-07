import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  line-height: 3.5rem;
  background-color: #ffffff;
  box-shadow: 0 0 0.5rem 0 rgba(161, 177, 204, 0.325);
  cursor: default;
  z-index: 10000;

  & a {
    text-decoration: none;
    color: #7a7d86;
  }

  & a:hover {
    color: #e59dc4;
  }
`;

export const StyledLogo = styled.div`
  position: absolute;
  top: 0;
  left: 2rem;
  text-transform: uppercase;

  & a {
    display: block;
    height: inherit;
    line-height: inherit;
    border-bottom: 0;
  }

  & a strong {
    font-weight: 900;
  }
`;

export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  right: 2rem;

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & ul li {
    position: relative;
    display: inline-block;
    margin: 1px 0.75rem;
    padding: 0;
  }

  & ul li a {
    padding: 0 0.75rem;
    font-weight: 600;
    overflow: hidden;
  }

  & ul li.current:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-image: linear-gradient(90deg, #a480ff, #ff8f83);
  }
`;
