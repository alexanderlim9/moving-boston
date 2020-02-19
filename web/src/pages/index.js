import React from "react";
import { graphql } from "gatsby";
import PortableText from "../components/portableText";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { HPHero } from "../components/homepage/hero";

import "../styles/homepage/homepage-styles.css";

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
      secThreeTitle
      _rawSecThreeBody
      secThreeCTA
      _rawHeroImage
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
  const { title, _rawBody, subtitle } = (data || {}).sanityHomePage;
  const hpdata = (data || {}).sanityHomePage;
  console.log(hpdata);
  // console.log(imageUrlFor(buildImageObj(hpdata._rawHeroImage)))

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <div className="homepage">
      <div
        style={{ backgroundImage: `url(${hpdata.heroImage.asset.url})` }}
        alt={hpdata.heroImage.alt}
        className="hphero"
      >
        <h1 hidden>Welcome to {site.title}</h1>
        <HPHero title={hpdata.title} year={hpdata.year} />
      </div>
      {/* {_rawBody && <PortableText blocks={_rawBody} />} */}
    </div>
  );
};

export default IndexPage;
