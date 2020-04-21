import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../../components/graphql-error-list";
import SEO from "../../components/seo";
import Layout from "../../containers/layout";
import { Link } from "@reach/router";
import "../../styles/questions/question-general-styles.css";
import "../../styles/questions/question-one-styles.css";
import Frequency from "../../components/questioncomponents/frequency/frequency";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ProgressBar from "../../components/progressbar/progressbar";
import { PageNav } from "../../components/pagenav/pagenav";

export const query = graphql`
  query QuestionOneQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    sanityQuestion1 {
      introText1
      introText2
      introText3
      segueToQuestion
      question1
      slug {
        current
      }
      title
    }
  }
`;

const QuestionOne = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const qoneData = (data || {}).sanityQuestion1;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const [displayStep, setDisplayStep] = useState(0);
  const [answerOptions, setAnswerOptions] = useState([
    "Never",
    "Sometimes",
    "Most of the time",
    "Always"
  ]);
  const [options, setOptions] = useState({
    Train: { image: require("../../assets/transporationmodes/train.png"), selectedValue: null },
    Bus: { image: require("../../assets/transporationmodes/bus.png"), selectedValue: null },
    T: { image: require("../../assets/transporationmodes/t.png"), selectedValue: null },
    Car: { image: require("../../assets/transporationmodes/car.png"), selectedValue: null },
    Bike: { image: require("../../assets/transporationmodes/bike.png"), selectedValue: null },
    Walk: { image: require("../../assets/transporationmodes/walk.png"), selectedValue: null },
    Ferry: { image: require("../../assets/transporationmodes/ferry.png"), selectedValue: null },
    Rideshare: {
      image: require("../../assets/transporationmodes/rideshare.png"),
      selectedValue: null
    },
    Scooter: { image: require("../../assets/transporationmodes/scooter.png"), selectedValue: null }
  });
  const [isOnIntro, setIsOnIntro] = useState(true);

  const [progressAmount, setProgressAmount] = useState("12.5%");
  const [oneColor, setOneColor] = useState("#3A71FF");

  const setSpecificOption = (opt, value) => {
    setOptions({
      ...options,
      [opt]: {
        image: options[opt].image,
        selectedValue: value
      }
    });
  };

  const setStepTwo = () => {
    setDisplayStep(1);
    setProgressAmount("25%");
    setOneColor("#EBFF00");
  };

  const setStepThree = () => {
    setDisplayStep(2);
    setProgressAmount("37.5%");
    setOneColor("#2E2E2E");
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <div className="qcontainer">
        <ProgressBar
          progressAmount={progressAmount}
          oneColor={oneColor}
          twoColor={"#3A71FF"}
          threeColor={"#3A71FF"}
        />
        {/* Intro */}
        <div className="sequential-intro-1">
          <div className="qintro__description sequential-child">{qoneData.introText1}</div>
          <div className="qintro__description sequential-child">{qoneData.introText2}</div>
        </div>
        <div
          className={`sequential-intro-2 ${
            displayStep === 0 ? "qcontent--shown" : "qcontent--hidden"
          }`}
        >
          <div className="qintro__description">{qoneData.introText3}</div>
          <div className="qintro__cta">
            <div className="qnextlink">{qoneData.segueToQuestion}</div>

            <div className="qintro__buttons">
              <div className="qbutton qnextquestion" onClick={() => setStepTwo()}>
                Continue
              </div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className={`qcontent ${displayStep === 1 ? "qcontent--shown" : "qcontent--hidden"}`}>
          <div className="qintro__description">{qoneData.question1}</div>
          <Frequency
            setSpecificCallback={(opt, value) => setSpecificOption(opt, value)}
            options={options}
            answerOptions={answerOptions}
          />
          <div className="qintro__cta qintro__cta--special" onClick={() => setStepThree()}>
            <div className="qbutton qnextquestion" style={{ display: "inline-block" }}>
              Continue
            </div>
          </div>
        </div>

        {/* Payoff */}
        <div
          className={`qcontent ${
            displayStep === 2 ? "qcontent--shown" : "qcontent--hidden"
          } qpayoff`}
        >
          <div className="qintro__description">Let's see how you compare</div>
          <div className="payoff__text">
            Bostonians get around in a lot of different ways. On an average commute
          </div>

          <div className="payoff__percent-block">
            <div className="payoff__percent">39%</div>
            <div className="payoff__text">
              of Bostonians <em>drive alone</em>
            </div>
          </div>

          <div className="payoff__percent-block">
            <div className="payoff__percent">34%</div>
            <div className="payoff__text">
              take <em>public transit</em>, including the T, bus, &amp; commuter rail
            </div>
          </div>

          <div className="payoff__percent-block payoff__small-container">
            <div className="payoff__percent-block--small">
              <div className="payoff__percent">14%</div>
              <div className="payoff__text">
                <em>walk</em>
              </div>
            </div>

            <div className="payoff__percent-block--small">
              <div className="payoff__percent">6%</div>
              <div className="payoff__text">
                <em>carpool</em>
              </div>
            </div>

            <div className="payoff__percent-block--small">
              <div className="payoff__percent">2%</div>
              <div className="payoff__text">
                <em>bike</em>
              </div>
            </div>
          </div>
          <div className="payoff__text payoff__percent payoff__text--bottom">
            and 5% use other forms of transportation.
          </div>
          <div className="payoff__text payoff__text--bottom">
            Data from 2014, compiled by <a href="http://goboston2030.org">GoBoston2030</a>
          </div>

          <PageNav
            nextTitle={"Continue"}
            nextLink={"questions/questiontwo/"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default QuestionOne;
