import React, { useState } from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../../components/graphql-error-list";
import SEO from "../../components/seo";
import Layout from "../../containers/layout";
import { Link } from "@reach/router";
import "../../styles/questions/question-one-styles.css";
import "../../styles/questions/question-general-styles.css";
import Frequency from "../../components/questioncomponents/frequency/frequency";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
  console.log(qoneData);

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const [isOnIntro, setIsOnIntro] = useState(true);
  const [answerOptions, setAnswerOptions] = useState([
    "Never",
    "Sometimes",
    "Most of the time",
    "Always"
  ]);
  const [options, setOptions] = useState({
    Train: { image: require('../../assets/transporationmodes/train.png'), selectedValue: null },
    Bus: { image: require('../../assets/transporationmodes/bus.png'), selectedValue: null },
    T: { image: require('../../assets/transporationmodes/t.png'), selectedValue: null },
    Car: { image: require('../../assets/transporationmodes/car.png'), selectedValue: null },
    Bike: { image: require('../../assets/transporationmodes/bike.png'), selectedValue: null },
    Walk: { image: require('../../assets/transporationmodes/walk.png'), selectedValue: null },
    Ferry: { image: require('../../assets/transporationmodes/ferry.png'), selectedValue: null },
    Rideshare: { image: require('../../assets/transporationmodes/rideshare.png'), selectedValue: null },
    Scooter: { image: require('../../assets/transporationmodes/scooter.png'), selectedValue: null }
  });

  const setSpecificOption = (opt, value) => {
    console.log("opt", opt.image);
    setOptions({
      ...options,
      [opt]: {
        image: options[opt].image,
        selectedValue: value
      }
    });
  };

  return (
    <Layout>
      <div className="qcontainer">
        <div className={`qintro ${isOnIntro ? "qintro--shown" : "qintro--hidden"}`}>
          <div className="qintro__description">{qoneData.introText3}</div>
          <div className="qintro__cta" onClick={() => setIsOnIntro(false)}>
            <div className="qnextlink">{qoneData.question1}</div>
          </div>
        </div>

        <div className={`qcontent ${isOnIntro ? "qcontent--hidden" : "qcontent--shown"}`}>
          <div className="qintro__description">{qoneData.question1}</div>
          <Frequency
            setSpecificCallback={(opt, value) => setSpecificOption(opt, value)}
            options={options}
            answerOptions={answerOptions}
          />
          <div className="qnextprev">
            <AniLink paintDrip hex="#3A71FF" duration={.5} to={"questions/questiontwo/"} onClick={() => setIsOnIntro(false)}className="qbutton qnextquestion">
              Next Question
            </AniLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuestionOne;
