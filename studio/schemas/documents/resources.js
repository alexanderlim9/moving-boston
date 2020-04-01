export default {
  name: 'resources',
  type: 'resources',
  title: 'Resources',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug'
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          type: 'object',
          title: 'Link',
          name: 'link',
          fields: [
            {
              title: 'Link Title',
              name: 'linktitle',
              type: 'string'
            },
            {
              title: 'Link URL',
              name: 'linkurl',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
}
