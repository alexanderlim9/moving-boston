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
import { PageNav } from "../components/pagenav/pagenav";

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
  const [progressAmount, setProgressAmount] = useState("91.66%");

  return (
    <Layout>
      <div className="qcontainer">
        <ProgressBar
          progressAmount={progressAmount}
          oneColor={"#2E2E2E"}
          twoColor={"#2E2E2E"}
          threeColor={"#2E2E2E"}
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

        <PageNav
          nextTitle={"Let's do the work"}
          nextLink={"resources/"}
          prevTitle={"Previous"}
          prevLink={"today/"}
        />
        </div>
      </div>
    </Layout>
  );
};

export default Inspiration;
