import React, { useState } from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../../components/graphql-error-list";
import SEO from "../../components/seo";
import Layout from "../../containers/layout";

import "../../styles/questions/question-three-styles.css";
import "../../styles/questions/question-general-styles.css";
import Slider from "../../components/questioncomponents/slider/slider";
import { Link } from "@reach/router";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ProgressBar from "../../components/progressbar/progressbar";

export const query = graphql`
  query QuestionThreeQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    sanityQuestion3 {
      id
      introNextTitle
      introNextDescription
      slug {
        current
      }
    }
  }
`;

const QuestionThree = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const qthreeData = (data || {}).sanityQuestion3;
  console.log(qthreeData);

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const [isOnIntro, setIsOnIntro] = useState(true);
  const [progressAmount, setProgressAmount] = useState("75%");

  return (
    <Layout>
      <div className="qcontainer">
        <ProgressBar
          progressAmount={progressAmount}
          oneColor={"#2E2E2E"}
          twoColor={"#2E2E2E"}
          threeColor={"#EBFF00"}
        />
        <div className={`qintro ${isOnIntro ? "qintro--shown" : "qintro--hidden"}`}>
          <div className="qintro__description">{qthreeData.introNextDescription}</div>
          <div className="qintro__cta" onClick={() => setIsOnIntro(false)}>
            <div className="qnextlink">{qthreeData.introNextTitle}</div>
          </div>
        </div>

        <div className={`qcontent ${isOnIntro ? "qcontent--hidden" : "qcontent--shown"}`}>
          <div className="qintro__description">{qthreeData.introNextTitle}</div>
          <Slider sliderTitle="Autonomous Vehicles" />
          <Slider sliderTitle="Cable Cars" />
          <Slider sliderTitle="Trackless Trains" />
          <div className="qnextprev">
            <AniLink fade duration={0.5} to={"questions/questiontwo/"} className="qprevquestion">
              Previous Question
            </AniLink>
            <AniLink
              paintDrip
              hex="#3A71FF"
              duration={0.5}
              to={"today/"}
              shouldUpdateScroll={false}
              className="qnextquestion"
            >
              Next
            </AniLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuestionThree;
