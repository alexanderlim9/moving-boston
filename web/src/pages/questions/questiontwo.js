import React, { useState } from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../../components/graphql-error-list";
import SEO from "../../components/seo";
import Layout from "../../containers/layout";

import "../../styles/questions/question-two-styles.css";
import "../../styles/questions/question-general-styles.css";
import Frequency from "../../components/questioncomponents/frequency/frequency";
import { Link } from "@reach/router";

export const query = graphql`
  query QuestionTwoQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    sanityQuestion2 {
      question
    }
  }
`;

const QuestionTwo = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const qtwoData = (data || {}).sanityQuestion2;
  console.log(qtwoData);

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const [isOnIntro, setIsOnIntro] = useState(true);

  return (
    <Layout>
      <div className="qcontainer">
        <div className="qintro__description">{qtwoData.question}</div>
        <textarea 
          className="qtwo__frq"
          placeholder={"What are some of your biggest frustrations?"}/>
        <Link to={"questions/questionthree/"} className="qintro__cta">
          next
        </Link>
        {/* <div className={`qintro ${isOnIntro ? "qintro--shown" : "qintro--hidden"}`}>
          <div className="qintro__description">{qoneData.introNextDescription}</div>
          <div className="qintro__cta" onClick={() => setIsOnIntro(false)}>
            {qoneData.introNextTitle}
          </div>
        </div>

        <div className={`qcontent ${isOnIntro ? "qcontent--hidden" : "qcontent--shown"}`}>
          <div className="qintro__description">{qoneData.introNextTitle}</div>
          <Frequency
            setSpecificCallback={(opt, value) => setSpecificOption(opt, value)}
            options={options}
            answerOptions={answerOptions}
          />
        </div> */}
      </div>
    </Layout>
  );
};

export default QuestionTwo;
