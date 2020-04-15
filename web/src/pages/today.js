import React from "react";
import { graphql } from "gatsby";
import PortableText from "../components/portableText";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import "../styles/today/today-styles.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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

  return (
    <Layout>
      <div className="today">
        <div className="today__text">{todayData.intro}</div>
        <div className="today__sectionOne">
          <h1>{todayData.sectionOneTitle}</h1>
          <div className="today__modes">
            <div className="today__modes-item">
              <h2>Walking</h2>
              <div className="today__modes-stat">
                <img src={require('../assets/fact-stats/50percent-up.png')}/>
                <span>up 50%</span>
              </div>
            </div>
            <div className="today__modes-item">
              <h2>Public Transit</h2>
              <div className="today__modes-stat">
                <img src={require('../assets/fact-stats/33percent.png')}/>
                <span>up 33%</span>
              </div>
            </div>
            <div className="today__modes-item">
              <h2>Biking</h2>
              <div className="today__modes-stat">
                <img id="" src={require('../assets/fact-stats/4x.png')}/>
                <span>more usage</span>
              </div>
            </div>
            <div className="today__modes-item">
              <h2>Driving Alone</h2>
              <div className="today__modes-stat">
                <img src={require('../assets/fact-stats/50percent-down.png')}/>
                <span>down 50%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="today__sectionTwo">
          <h1>{todayData.sectionTwoTitle}</h1>
          {todayData._rawSectionTwoContent && <PortableText blocks={todayData._rawSectionTwoContent}/>}
        </div>
        <div className="today__moreInfo">
          <p>For more information, visit <a href={todayData.linkToInfo} target="_blank">goboston2030.org</a></p>
        </div>
        <div>{todayData.outro}</div>

        <AniLink
          paintDrip
          hex="#3A71FF"
          duration={0.5}
          to={"resources"}
          className="qbutton qnextquestion"
        >
          Let's do the work
        </AniLink>
      </div>
    </Layout>
  );
};

export default TodayPage;
