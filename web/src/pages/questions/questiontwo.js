import React, { useState } from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../../components/graphql-error-list";
import SEO from "../../components/seo";
import Layout from "../../containers/layout";

import "../../styles/questions/question-two-styles.css";
import "../../styles/questions/question-general-styles.css";
import ProgressBar from "../../components/progressbar/progressbar";
import { PageNav } from "../../components/pagenav/pagenav";

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

  const [progressAmount, setProgressAmount] = useState("50%");

  return (
    <Layout>
      <div className="qcontainer">
        <ProgressBar
          progressAmount={progressAmount}
          oneColor={"#2E2E2E"}
          twoColor={"#EBFF00"}
          threeColor={"#3A71FF"}
        />
        <div className="qintro__description">{qtwoData.question}</div>
        <textarea
          className="qtwo__frq"
          placeholder={"What are some of your biggest frustrations?"}
        />
        <PageNav
          nextTitle={"Continue"}
          nextLink={"questions/questionthree/"}
          prevTitle={"Previous Question"}
          prevLink={"questions/questionone/"}
        />
      </div>
    </Layout>
  );
};

export default QuestionTwo;
