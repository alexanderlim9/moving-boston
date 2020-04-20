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
    <Layout displayFooter>
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
          <div className="resource additional-links">
            <div className="col-left">
              <div className="resource__context-title">Ask more questions</div>
              <div className="resource__context">Change starts with asking big questions. If you’re interested in finding out more about how public transit affects the way Bostonians live, this is a good place to start.</div>
            </div>
            <div className="col-right">
              <div className="resource__link-wrapper">
                <a className="resource__link" target="_blank" href="https://www.boston.gov/environment-and-energy/reducing-emissions">
                  How does the MBTA play into making Boston carbon neutral by 2050?
                </a>
              </div>
              <div className="resource__link-wrapper">
                <a className="resource__link" target="_blank" href="https://www.bostonglobe.com/metro/2018/12/14/vision-get-around-future-traffic/AsMDO4CPHhWMt0M0mdyOAN/story.html?p1=Article_Inline_Text_Link">
                  What can we do to decrease traffic in the streets of Boston?
                </a>
              </div>
              <div className="resource__link-wrapper">
                <a className="resource__link" target="_blank" href="https://www.mbta.com/projects">
                  What MBTA projects are going on right now?
                </a>
              </div>
              <div className="resource__link-wrapper">
                <a className="resource__link" target="_blank" href="https://www.bostonglobe.com/opinion/2019/01/31/opinion-michelle-forget-fare-hikes-make-free/vJpKVu6Rft2C4Esi50mB5M/story.html">
                  How close are we to free public transit in Boston?
                </a>
              </div>
            </div>
          </div>
        </div>
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
      <a className="resource__link" target="_blank" href={props.linkurl}>
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
