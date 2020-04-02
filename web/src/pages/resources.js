import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import "../styles/resources/resources-styles.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const query = graphql`
  query ResourcesPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    sanityResources {
      title
      sectionDescription
      linkblock {
        linkurl
        linktitle
        context
        contexttitle
      }
    }
  }
`;

const ResourcesPage = props => {
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
  const resourcesData = (data || {}).sanityResources;
  console.log(resourcesData);
  // console.log(imageUrlFor(buildImageObj(hpdata._rawHeroImage)))

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <div className="resources">
        <div className="resources__description">{resourcesData.sectionDescription}</div>
        <div className="resources__resource-list">
          {resourcesData.linkblock.map((link, index) => {
            return (
              <Resource
                contexttitle={link.contexttitle}
                context={link.context}
                linkurl={link.linkurl}
                linktitle={link.linktitle}
              />
            );
          })}
        </div>
        {/* <AniLink
          paintDrip
          hex="#3A71FF"
          duration={0.5}
          to={"questions/questiontwo/"}
          className="qbutton qnextquestion"
        >
          Let's do the work
        </AniLink> */}
      </div>
    </Layout>
  );
};

export default ResourcesPage;

const Resource = props => {
  return (
    <div className="resource">
      <div className="resource__context-title">{props.contexttitle}</div>
      <div className="resource__context">{props.context}</div>
      <a className="resource__link" href={props.linkurl}>
        {props.linktitle}
      </a>
    </div>
  );
};
