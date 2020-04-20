import React, { useState } from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";

import "../styles/about/about-styles.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const AboutPage = props => {
  return (
    <Layout displayFooter>
      <div className="about">
        <div className="about__section">
          <div className="about__text" style={{padding: "30px 0 0"}}>About this experience</div>
          <h1 className="about__title">What will Boston look like in 10 years?</h1>
          <div className="about__text">
            More importantly, how will you get around Boston in 10 years? A lot is changing right
            now, from new technology, to our environment &amp; climate, to the structure of our
            daily lives. Inevitably, this is going to affect the way we get around our city.
          </div>
          <div className="about__text">
            Moving Boston 2030 asks us to reflect on the disparities between what we have and what
            we need when it comes to public transportation in Boston.
          </div>
          <div className="about__text">
            This survey experience aims to push for more interest and care for our public transit
            system – to get people more invested in Boston’s future, and connect us to the resources
            needed to accomplish this.
          </div>

          <AniLink
            fade
            duration={0.5}
            to={"questions/questionone/"}
            className="about__button"
          >
            Start the experience
          </AniLink>
        </div>

        <div className="about__image" />

        <div className="about__section about__section--split">
          <div className="about-section__left">
            <h2 className="about-section__title">
              How is the data gathered through this survey used?
            </h2>
            <div className="about__text about-section__text">
              As of right now, Moving Boston 2030 is a purely reflective experience. We do not store
              or keep track of any of the choices you make in this survey. We hope this experience
              gives you space to think about how you use public transportation, and how you hope to
              use it in the future.
            </div>
          </div>

          <div className="about-section__right">
            <h2 className="about-section__title">Who created this?</h2>
            <div className="about__text about-section__text">
              Moving Boston 2030 is the senior capstone project of{" "}
              <a target="__blank" href="https://twitter.com/journalims">
                Alex Lim
              </a>
              ,{" "}
              <a target="__blank" href="https://melvin-chen.com">
                Mel Chen
              </a>
              , and{" "}
              <a target="__blank" href="http://smilyanski.com">
                Yuliya Smilyanski
              </a>
              , Northeastern University Class of 2020. This project was completed under the
              advisement of{" "}
              <a target="__blank" href="https://camd.northeastern.edu/faculty/mark-sivak/">
                {" "}
                Mark Sivak.
              </a>
            </div>
          </div>
        </div>

        <div className="about__section about__section--split">
          <div className="about-section__left">
            <h2 className="about-section__title">Special Thanks</h2>
            <div className="about__text about-section__text">
              Mark Sivak, Advisor &amp; Associate Professor, Northeastern University College of Art
              Media &amp;
              <br />
              Design Kris Carter, Co-Chair, Mayor's Office of New Urban Mechanics
              <br />
              Alice Brown, Director of Planning, Boston Harbor Now
              <br />
              Lindiwe Rennert, Transit Planner, Boston Transportation Department
              <br />
            </div>
          </div>
          <div className="about-section__right">
            <div className="about__text about-section__text">
              Dan O’Brien, Assistant Professor, Northeastern University School of Public Policy and
              Urban Affairs
              <br />
              Aleszu Bajak, Professor, Northeastern University School of Journalism
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
