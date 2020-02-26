export default {
  name: 'home-page',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'year',
      type: 'string',
      title: 'Year',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'heroImage',
      type: 'mainImage',
      title: 'Hero Image'
    },
    {
      name: 'secTwoTitle',
      type: 'string',
      title: 'Section 2 Title',
    },
    {
      name: 'secTwoBody',
      type: 'bodyPortableText',
      title: 'Section 2 Body'
    },
    {
      name: 'secTwoImage',
      type: 'mainImage',
      title: 'Section 2 Image '
    },
    {
      name: 'secTwoCTA',
      type: 'string',
      title: 'Section 2 CTA Title',
    },
    {
      name: 'secThreeTitle',
      type: 'string',
      title: 'Section 3 Title',
    },
    {
      name: 'secThreeBody',
      type: 'bodyPortableText',
      title: 'Section 3 Body'
    },
    {
      name: 'secThreeImage',
      type: 'mainImage',
      title: 'Section 3 Image '
    },
    {
      name: 'secThreeCTA',
      type: 'string',
      title: 'Section 3 CTA Title',
    },
    {
      name: 'secThreeSecondaryCTA',
      type: 'string',
      title: 'Section 3 Secondary CTA Title',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
  ]
}
