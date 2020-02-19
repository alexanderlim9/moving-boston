import React from "react";

export const HPHero = props => {
  return (
    <div className="hphero__text-container">
      <h1 className="hphero__title">{props.title}</h1>
      <h2 className="hphero__year">{props.year}</h2>
      <a href="/" className="hphero__cta">Let's go</a>
    </div>
  );
};
