import React, { useState } from "react";

import "./pagenav-styles.css";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const PageNav = props => {
  return (
    <div className="pagenav">
      <AniLink
        paintDrip
        duration={0.5}
        hex="#3A71FF"
        to={props.nextLink}
        className="pagenav__next-link"
      >
        {props.nextTitle}
      </AniLink>

      {props.prevTitle ? (
        <AniLink fade duration={0.5} to={props.prevLink} className="pagenav__prev-link">
          {props.prevTitle}
        </AniLink>
      ) : null}
    </div>
  );
};
