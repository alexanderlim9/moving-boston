import React from "react";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const HPHero = props => {
  return (
    <div className="hphero__text-container">
      <h1 className="hphero__title">{props.title}</h1>
      <h2 className="hphero__year">{props.year}</h2>
      <AniLink
        paintDrip
        duration={.5}
        hex="#3A71FF"
        exit={{ zIndex: 0 }}
        entry={{ zIndex: 0 }}
        className="hphero__cta"
        to="/questions/questionone/"
      >
        Let's go
      </AniLink>
    </div>
  );
};
