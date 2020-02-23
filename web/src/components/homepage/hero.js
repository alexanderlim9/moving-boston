import React from "react";
import { Link } from "gatsby";

export const HPHero = props => {
  return (
    <div className="hphero__text-container">
      <h1 className="hphero__title">{props.title}</h1>
      <h2 className="hphero__year">{props.year}</h2>
      <Link className="hphero__cta" to="/">Let's go</Link>
    </div>
  );
};
