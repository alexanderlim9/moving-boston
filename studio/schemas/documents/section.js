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
      name: 'slug',
      type: 'slug',
      title: 'Slug'
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'The order that this section should appear in the narrative (e.g. 1, 2, 3).'
    },
    {
      name: 'question',
      type: 'array',
      title: 'Question',
      of: [
        {
          type: 'reference',
          to: {
            type: 'question'
          }
        }
      ]
    },
    {
      name: 'slides',
      type: 'slidePortableText',
      title: 'Slides'
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
