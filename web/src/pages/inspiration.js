import React, { useState } from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import "../styles/questions/question-general-styles.css";
import "../styles/inspiration/inspiration.css";
import { Link } from "@reach/router";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ProgressBar from "../components/progressbar/progressbar";
import SimpleSlider from "../components/carousel/carousel";

export const query = graphql`
  query Inspiration {
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

const Inspiration = props => {
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
  const [progressAmount, setProgressAmount] = useState("87.5%");

  return (
    <Layout>
      <div className="qcontainer">
        <ProgressBar
          progressAmount={progressAmount}
          oneColor={"#2E2E2E"}
          twoColor={"#2E2E2E"}
          threeColor={"#EBFF00"}
        />
        <div className="intro">
          <h1 className="qintro__description">We know that Boston can do this.</h1>
          <p>It’s frustrating to hear that it seems like not much will change.</p>
          <p>But there are examples we can look to where cities have gotten it right. </p>
        </div>
        <div className="main">
          <SimpleSlider></SimpleSlider>
        </div>

        <div className="qcontent qcontent--shown">
          <div className="qnextprev">
            <AniLink fade duration={0.5} to={"questions/questionthree/"} className="qprevquestion">
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

export default Inspiration;
