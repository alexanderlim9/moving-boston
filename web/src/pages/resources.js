import React, { useState } from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import "../styles/resources/resources-styles.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton,
  EmailIcon,
  EmailShareButton
} from "react-share";
import ProgressBar from "../components/progressbar/progressbar";

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

  const [progressAmount, setProgressAmount] = useState("100%");

  return (
    <Layout>
      <div className="resources">
        <ProgressBar
          progressAmount={progressAmount}
          oneColor={"#2E2E2E"}
          twoColor={"#2E2E2E"}
          threeColor={"#2E2E2E"}
        />
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
          <ShareResource />
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

const ShareResource = props => {
  const shareUrl = "https://moving-boston-web.netlify.com/";
  const iconSize = 28;

  return (
    <div className="resource">
      <div className="resource__context-title">
        Start the conversation, share this survey on social media
      </div>
      <div className="resource__context">
        Share this survey on social media to get more people talking and reflecting on the
        importance of public transit!{" "}
      </div>

      <div className="resource__social-links">
        <EmailShareButton url={shareUrl}>
          <EmailIcon
            size={iconSize}
            borderRadius={5}
            iconFillColor={"#3A71FF"}
            bgStyle={{ fill: "white" }}
          />
        </EmailShareButton>

        <FacebookShareButton url={shareUrl}>
          <FacebookIcon
            size={iconSize}
            borderRadius={5}
            iconFillColor={"#3A71FF"}
            bgStyle={{ fill: "white" }}
          />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl}>
          <TwitterIcon
            size={iconSize}
            borderRadius={5}
            iconFillColor={"#3A71FF"}
            bgStyle={{ fill: "white" }}
          />
        </TwitterShareButton>

        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon
            size={iconSize}
            borderRadius={5}
            iconFillColor={"#3A71FF"}
            bgStyle={{ fill: "white" }}
          />
        </LinkedinShareButton>
      </div>
    </div>
  );
};
