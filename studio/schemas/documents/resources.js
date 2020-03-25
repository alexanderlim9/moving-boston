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
      name: 'introDescription',
      description: 'this goes in the intro slide before the resources page',
      type: 'text',
      title: 'Description'
    },
    /* {
      title: 'Names',
      name: 'names',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'street', type: 'string', title: 'Street name' },
            { name: 'streetNo', type: 'string', title: 'Street number' },
            { name: 'city', type: 'string', title: 'City' }
          ]
        }
      ]
    } */
  ]
}
