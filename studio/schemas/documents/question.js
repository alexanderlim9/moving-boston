export default {
  name: 'question',
  type: 'document',
  title: 'Question',
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
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}
