export default {
  name: 'resources',
  type: 'document',
  title: 'Resources',
  fields: [{
    name: 'title',
    type: 'string',
    title: 'Title'
  },
  {
    name: 'sectionDescription',
    type: 'string',
    title: 'Section Description',
    description: 'A briefing on what this section will be for'
  },
  {
    name: 'slug',
    type: 'slug',
    title: 'Slug'
  },
  {
    name: 'linkblock',
    type: 'array',
    title: 'Link Block',
    of: [{
      type: 'resource',
      title: 'Resource',
      name: 'resource',
    }]
  }
  ]
}
