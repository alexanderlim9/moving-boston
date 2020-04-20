import React, { useState } from "react";
import { graphql } from "gatsby";
import PortableText from "../components/portableText";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import "../styles/today/today-styles.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ProgressBar from "../components/progressbar/progressbar";
import { PageNav } from "../components/pagenav/pagenav";

export const query = graphql`
  query TodayPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    sanityToday {
      title
      intro
      slug {
        current
      }
      sectionOneTitle
      sectionTwoTitle
      _rawSectionTwoContent
      linkToInfo
      outro
    }
  }
`;

const TodayPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  //   const { title, _rawBody, subtitle } = (data || {}).sanityHomePage;
  const todayData = (data || {}).sanityToday;
  console.log(todayData);
  // console.log(imageUrlFor(buildImageObj(hpdata._rawHeroImage)))

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  /* <div
  style={{ backgroundImage: `url(${hpdata.heroImage.asset.url})` }}
  alt={hpdata.heroImage.alt}
  className="hphero"> */

  const [progressAmount, setProgressAmount] = useState("85%")
  return (
    <Layout>
      <div className="today">
        <ProgressBar
          progressAmount={progressAmount}
          oneColor={"#2E2E2E"}
          twoColor={"#2E2E2E"}
          threeColor={"#2E2E2E"}
        />
        <div className="today__intro">{todayData.intro}</div>
        <div className="today__sectionOne">
          <h1>{todayData.sectionOneTitle}</h1>
          <div className="today__modes">
            <div className="today__modes-item">
              <h2>Walking</h2>
              <div className="today__modes-stat">
                <img src={require("../assets/fact-stats/50percent-up.png")} />
                <span>up 50%</span>
              </div>
            </div>
            <div className="today__modes-item">
              <h2>Public Transit</h2>
              <div className="today__modes-stat">
                <img src={require("../assets/fact-stats/33percent.png")} />
                <span>up 33%</span>
              </div>
            </div>
            <div className="today__modes-item">
              <h2>Biking</h2>
              <div className="today__modes-stat">
                <img id="biking-stat" src={require("../assets/fact-stats/4x.png")} />
                <span>more usage</span>
              </div>
            </div>
            <div className="today__modes-item">
              <h2>Driving Alone</h2>
              <div className="today__modes-stat">
                <img src={require("../assets/fact-stats/50percent-down.png")} />
                <span>down 50%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="today__sectionTwo">
          <h1>{todayData.sectionTwoTitle}</h1>
          {todayData._rawSectionTwoContent && (
            <PortableText blocks={todayData._rawSectionTwoContent} />
          )}
        </div>
        <div className="today__moreInfo">
          <p>
            For more information, visit{" "}
            <a href={todayData.linkToInfo} target="_blank">
              goboston2030.org
            </a>
          </p>
        </div>
        <div>{todayData.outro}</div>
        
        <PageNav
          nextTitle={"Let's do the work"}
          nextLink={"resources/"}
          prevTitle={"Previous"}
          prevLink={"inspiration/"}
        />
      </div>
    </Layout>
  );
};

export default TodayPage;
