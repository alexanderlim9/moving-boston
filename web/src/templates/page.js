import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {toPlainText} from '../lib/helpers'

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanitySection(id: {eq: $id}) {
      id
      title
      _rawSlides
    }
  }
`

const PageTemplate = props => {
  const {data, errors} = props
  const page = data && data.page
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {page && <SEO title={page.title || 'Untitled'}/>}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {page && <BlogPost {...page} />}
    </Layout>
  )
}

export default PageTemplate
