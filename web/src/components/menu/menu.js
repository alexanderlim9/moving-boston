import React, { useState } from "react";
import Icon from "../icon";
import MenuBackground from "./menu-background.svg";

import "../../styles/menu/menu-styles.css";
import { Link } from "gatsby";

export const Menu = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">Survey</Link>
            </li>

            <li>
              <Link to='/today/'>Facts</Link>
            </li>

            <li>
              <Link to="/">Resources</Link>
            </li>

            <li>
              <Link to="/">About</Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
