import React from "react";
import { StyledHeader, StyledLogo, StyledNav } from "./styles";

export const Navbar: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <a href="https://steamuserimages-a.akamaihd.net/ugc/946220022126942778/F7EA1482B7967952540BB8F0CEE0822048BDE466/">
          <strong>Dont click here!</strong> Please?
        </a>
      </StyledLogo>
      <StyledNav>
        <ul>
          <li>
            <a href="https://assets.change.org/photos/3/wn/ua/SnwNuAfdCHjPqqi-800x450-noPad.jpg?1554888818">Home</a>
          </li>
          <li className="current">
            <a href="https://i.kym-cdn.com/photos/images/newsfeed/001/443/311/70f.gif">Pomodoro</a>
          </li>
          <li>
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTAUTKagxjPG_3C_tbizZOkGZtqiLCYMcVpDTBECW7Ht83jpG_">About Mar</a>
          </li>
          <li>
            <a href="https://img-comment-fun.9cache.com/media/aQMBM88/ajGMNMAl_700w_0.jpg">Roxas Shitposting</a>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};
