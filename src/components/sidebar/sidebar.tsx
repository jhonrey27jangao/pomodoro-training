import React from "react";
import { StyledSideBar, StyledSideBarContent, StyledLogo } from "./styles";
import { Link } from "react-router-dom";

export const SideBar: React.FC = () => (
  <StyledSideBar>
    <StyledLogo>
      <a href="sadad">Ricardo.</a>
    </StyledLogo>
    <StyledSideBarContent>
      <ul className="sideBar-nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/pomodoro">
          <li>Pomodoro</li>
        </Link>
        <Link to="/covid-tracker">
          <li>Covid Tracker</li>
        </Link>
      </ul>

      <ul className="sideBar-social">
        <li className="ss-fb">
          <a href="https://facebook.com">
            <span>Facebook</span>
          </a>
        </li>
        <li className="ss-insta">
          <a href="https://instagram.com">
            <span>Instagram</span>
          </a>
        </li>
        <li className="ss-dribble">
          <a href="https://dribble.com">
            <span>Gmail</span>
          </a>
        </li>
        <li className="ss-twitter">
          <a href="https://twitter.com">
            <span>Twitter</span>
          </a>
        </li>
      </ul>
    </StyledSideBarContent>
  </StyledSideBar>
);
