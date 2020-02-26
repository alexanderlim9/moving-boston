import React, { useState } from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../../components/graphql-error-list";
import SEO from "../../components/seo";
import Layout from "../../containers/layout";

import "../../styles/questions/question-one-styles.css";
import "../../styles/questions/question-general-styles.css";
import Frequency from "../../components/questioncomponents/frequency/frequency";

export const query = graphql`
  query QuestionOneQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    sanityQuestion1 {
      introNextTitle
      introNextDescription
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
    Train: { image: null, selectedValue: null },
    Bus: { image: null, selectedValue: null },
    T: { image: null, selectedValue: null },
    Car: { image: null, selectedValue: null },
    Bike: { image: null, selectedValue: null },
    Walk: { image: null, selectedValue: null },
    Ferry: { image: null, selectedValue: null },
    Rideshare: { image: null, selectedValue: null },
    Scooter: { image: null, selectedValue: null }
  });

  const setSpecificOption = (opt, value) => {
    setOptions({
      ...options,
      [opt]: {
        image: opt.image,
        selectedValue: value
      }
    });
  };

  return (
    <Layout>
      <div className="qcontainer">
        <div className={`qintro ${isOnIntro ? "qintro--shown" : "qintro--hidden"}`}>
          <div className="qintro__description">{qoneData.introNextDescription}</div>
          <div className="qintro__cta" onClick={() => setIsOnIntro(false)}>
            {qoneData.introNextTitle}
          </div>
        </div>

        <div className={`qcontent ${isOnIntro ? "qcontent--hidden" : "qcontent--shown"}`}>
          <div className="qintro__description">{qoneData.introNextTitle}</div>

          <div className="qintro__cta" onClick={() => setIsOnIntro(true)}>debug back</div>
          <Frequency
            setSpecificCallback={(opt, value) => setSpecificOption(opt, value)}
            options={options}
            answerOptions={answerOptions}
          />
        </div>
      </div>
    </Layout>
  );
};

export default QuestionOne;
