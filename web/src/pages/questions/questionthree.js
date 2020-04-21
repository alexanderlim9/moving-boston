import React, { useState } from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../../components/graphql-error-list";
import SEO from "../../components/seo";
import Layout from "../../containers/layout";

import "../../styles/questions/question-three-styles.css";
import "../../styles/questions/question-general-styles.css";
import Slider from "../../components/questioncomponents/slider/slider";
import { Link } from "@reach/router";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ProgressBar from "../../components/progressbar/progressbar";
import { PageNav } from "../../components/pagenav/pagenav";

export const query = graphql`
  query QuestionThreeQuery {
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

const QuestionThree = props => {
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

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const [isOnIntro, setIsOnIntro] = useState(true);
  const [progressAmount, setProgressAmount] = useState("75%");
  const [zero, setZero] = useState(false);

  return (
    <Layout>
      <div className="qcontainer">
        <ProgressBar
          progressAmount={progressAmount}
          oneColor={"#2E2E2E"}
          twoColor={"#2E2E2E"}
          threeColor={"#EBFF00"}
        />
        <div className={`qintro ${isOnIntro ? "qintro--shown" : "qintro--hidden"}`}>
          <div className="qintro__description">{qthreeData.introNextDescription}</div>
          <div className="qintro__cta">
            <div className="qnextlink">{qthreeData.introNextTitle}</div>

            <div className="qnextprev">
              <AniLink fade duration={0.5} to={"questions/questiontwo/"} className="qprevquestion">
                Previous Question
              </AniLink>
              <div className="qbutton qnextquestion" onClick={() => setIsOnIntro(false)}>
                Continue
              </div>
            </div>
          </div>
        </div>

        <div className={`qcontent ${isOnIntro ? "qcontent--hidden" : "qcontent--shown"}`}>
          <div className="qintro__description">{qthreeData.introNextTitle}</div>
          <Slider 
          sliderTitle="Autonomous vehicles" 
          tooltipText="Autonomous vehicles, or AVs, are self-driving cars which are capable of sensing their environment and moving safely with little or no human input. From a public transportation perspective, AVs could serve as shared “mini buses”, which take their multiple passengers to their specific destinations, driving on the most efficient path possible. Another benefit of using shared autonomous vehicles is fewer parking spaces needed in more populous areas. Some AVs are functioning in Boston already, practicing in the Seaport District!"
          sliderNumber="0"
          zero={zero}
          />
          <Slider 
          sliderTitle="Bus rapid transit" 
          tooltipText="Bus Rapid Transit (BRT) is a high-quality bus-based transit system that delivers fast, comfortable, and cost-effective services at metro-level capacities. It does this through the provision of dedicated lanes, with busways and iconic stations typically aligned to the center of the road, off-board fare collection, and fast and frequent operations. Because BRT contains features similar to a light rail or metro system, it is much more reliable, convenient and faster than regular bus services. With the right features, BRT is able to avoid the causes of delay that typically slow regular bus services, like being stuck in traffic and queuing to pay on board."
          sliderNumber="1"
          zero={zero}
          />
          <Slider 
          sliderTitle="Cable cars" 
          tooltipText="Cable cars are similar to ski-lift gondolas, connected over a city’s roads to get people to their destinations. Cable cars are particularly popular in Latin America, where almost every city has expressed an interest in a cable car network. It’s easy to bridge tricky terrains with cable cars, and the systems are easy to construct and maintain. They are also powered by electricity, making them a quiet and sustainable option for transportation."
          sliderNumber="2"
          zero={zero}
          />
          <Slider 
          sliderTitle="High-speed trains"
          tooltipText="High-speed trains are a type of rail transport that runs significantly faster than traditional rail traffic, using an integrated system of specialized rolling stock and dedicated tracks. This type of rail transport is popular across the globe, first created in Japan, and now spread across China and connecting much of Europe. Trains can travel up to 200 miles per hour, and make traveling and commuting cheaper and faster than with cars or airplanes."
          sliderNumber="3"
          zero={zero}
          />
          <Slider 
          sliderTitle="Ferries"
          tooltipText="A ferry is a boat that travels across a body of water with the main goal of carrying passengers. A ferry can travel back and forth between 2 ports, or drop off passengers at many stops – this is called a water bus or taxi. Boston does have some ferry service already, connecting Charlestown, Hingham, Hull, and Logan Airport to the Long Wharf, but stays mainly in the harbor."
          sliderNumber="4"
          zero={zero}
          />
          <button id="setToZeroButton" className={`${zero ? 'hidden' : ''}`} onClick={() => setZero(true)}>Continue</button>

          <div className={`qnextprev ${zero ? '' : 'hidden'}`}>
            <AniLink fade duration={0.5} to={"questions/questiontwo/"} className="qprevquestion">
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

export default QuestionThree;
