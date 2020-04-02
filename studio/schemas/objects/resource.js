export default {
  name: 'resource',
  type: 'object',
  title: 'Resource',
  fields: [
    {
      name: 'contexttitle',
      description: 'Context Title',
      type: 'string',
      title: 'Context Title'
    },
    {
      name: 'context',
      description: 'Context for this link',
      type: 'text',
      title: 'Context'
    },
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
