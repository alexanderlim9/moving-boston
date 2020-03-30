import React from "react";
// import {graphql} from 'gatsby'
// import PortableText from '../components/portableText'

// export const query = graphql`
//   query QuestionPreviewQuery {
//     allSanitySection {
//         edges {
//           node {
//             id
//             _rawSlides
//           }
//         }
//       }
//   }
// `
const QuestionPreview = ({ value }) => {
  const { title } = value;
  if (!title) {
    return <p>Missing URL for Instagram post</p>;
  }

  return (
        <span>{title}</span>
  );
};

export default QuestionPreview;