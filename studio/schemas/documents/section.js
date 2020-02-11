export default {
  name: 'section',
  type: 'document',
  title: 'Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'The order that this section should appear in the narrative (e.g. 1, 2, 3).'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  orderings: [
    {
      title: 'Sequential',
      name: 'sequential',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
}
