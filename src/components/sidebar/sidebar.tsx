import React from "react";
import { StyledSideBar, StyledSideBarContent, StyledLogo } from "./styles";
import { Link } from "react-router-dom";

export const SideBar: React.FC = () => (
  <StyledSideBar>
    <StyledLogo>
      <a href="sadad">Typerite.</a>
    </StyledLogo>
    <StyledSideBarContent>
      <ul className="sideBar-nav">
        <Link to="/">
          <li>
            <a href="www.sasdad">Home</a>
          </li>
        </Link>
        <Link to="/Pomodoro">
          <li>
            <a href="www.sasdad">Pomodoro</a>
          </li>
        </Link>
        <Link to="/Covid-tracker">
          <li>
            <a href="www.sasdad">Covid Tracker</a>
          </li>
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
