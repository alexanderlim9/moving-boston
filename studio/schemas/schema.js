// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import question from './documents/question'
import question1 from './documents/question1'
import question2 from './documents/question2'
import question3 from './documents/question3'
import post from './documents/post'
import section from './documents/section'
import homePage from './documents/home-page'
import siteSettings from './documents/siteSettings'
import today from './documents/today'
import todayImage from './documents/todayImage'
import resources from './documents/resources'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import slidePortableText from './objects/slidePortableText'
import questionObj from './objects/questionObj'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import contextSlide from './objects/contextSlide'
import authorReference from './objects/authorReference'
import resource from './objects/resource'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    homePage,
    resources,
    post,
    section,
    today,
    todayImage,
    category,
    question,
    question1,
    question2,
    question3,
    author,
    mainImage,
    contextSlide,
    authorReference,
    bodyPortableText,
    slidePortableText,
    questionObj,
    bioPortableText,
    excerptPortableText,
    resource

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
