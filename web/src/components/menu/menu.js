import React, { useState } from "react";
import Icon from "../icon";
import MenuBackground from "./menu-background.svg";

import "../../styles/menu/menu-styles.css";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const Menu = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkTransitionDuration = 0.5;

  return (
    <div className="menu">
      <div className="menu__icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Icon strokeColor={'black'} symbol={isMenuOpen ? "close" : "hamburger"} />
      </div>

      <div
        style={{
          backgroundImage: `url(${MenuBackground})`
        }}
        className={`menu__overlay ${isMenuOpen ? "menu__overlay--shown" : "menu__overlay--hidden"}`}
      >
        <div className={"overlay__container"}>
          Moving Boston 2030
          <ol>
            <li>
              <AniLink fade duration={linkTransitionDuration} to="/">Home</AniLink>
            </li>

            <li>
              <AniLink fade duration={linkTransitionDuration} to="/questions/questionone">Survey</AniLink>
            </li>

            <li>
              <AniLink fade duration={linkTransitionDuration} to='/today/'>Facts</AniLink>
            </li>

            <li>
              <AniLink fade duration={linkTransitionDuration} to="/resources">Resources</AniLink>
            </li>

            <li>
              <AniLink fade duration={linkTransitionDuration} to="/">About</AniLink>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
