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
        <div className="today__description">{todayData.intro}</div>
        <div className="today__description">{todayData.sectionOneTitle}</div>
        <div className="today__description">{todayData.sectionTwoTitle}</div>
        <div className="today__description today__sectionTwoContent">
          {todayData._rawSectionTwoContent && <PortableText blocks={todayData._rawSectionTwoContent}/>}
        </div>

        {/* <div className="today__images-container">
          {todayData.images.map((image, index) => {
            return (
              <img
                key={index}
                className={"today__image"}
                src={image.image.asset.url}
                alt={image.image.alt}
              />
            );
          })}
        </div> */}

        <div className="today__description">
          If we want to see bigger changes to the system, it’s up to us.
        </div>

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
