import React from "react";
import { graphql, Link } from "gatsby";
import PortableText from "../components/portableText";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { HPHero } from "../components/homepage/hero";

import "../styles/homepage/homepage-styles.css";
import "../styles/homepage/homepage-lower-block-styles.css";

import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query HomePageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    sanityHomePage {
      _id
      title
      _rawBody
      slug {
        current
      }
      subtitle
      year
      secTwoTitle
      _rawSecTwoBody
      secTwoCTA
      secTwoImage {
        asset {
          url
        }
        alt
      }
      secThreeTitle
      _rawSecThreeBody
      secThreeCTA
      secThreeSecondaryCTA
      heroImage {
        asset {
          url
        }
        alt
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const hpdata = (data || {}).sanityHomePage;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout displayFooter>
      <div className="homepage">
        <div
          style={{ backgroundImage: `url(${hpdata.heroImage.asset.url})` }}
          alt={hpdata.heroImage.alt}
          className="hphero"
        >
          <h1 hidden>Welcome to {site.title}</h1>
          <HPHero title={hpdata.title} year={hpdata.year} />
          <div className={"hp__cta-section"}></div>
        </div>
        <div className={"hp__block hp__introduction"}>
          <div className={"hp__block__title"}>{hpdata.secTwoTitle}</div>
          <div className={"hp__block__lower-container"}>
            <img src={hpdata.secTwoImage.asset.url} className={"hp__lower-container__image"} />
            <div className={"hp__lower-container__text-cta"}>
              <div className={"hp__block__text"}>
                {hpdata._rawSecTwoBody && <PortableText blocks={hpdata._rawSecTwoBody} />}
              </div>
              <Link to={"/today/"} className={"hp__lower-container__cta"}>
                {hpdata.secTwoCTA}
              </Link>
            </div>
          </div>
        </div>
        <div className={"hp__block  hp__facts"}>
          <div className={"hp__block__title"}>{hpdata.secThreeTitle}</div>
          <div className={"hp__block__lower-container"}>
            <div className={"hp__block__text hp__facts__text"}>
              {hpdata._rawSecTwoBody && <PortableText blocks={hpdata._rawSecThreeBody} />}
            </div>
            <div className={"hp__facts__cta-container"}>
              <Link to={"/today/"} className={"hp__lower-container__cta"}>
                {hpdata.secThreeCTA}
              </Link>
              <Link to={"/resources/"} className={"hp__lower-container__cta"}>
                {hpdata.secThreeSecondaryCTA}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
