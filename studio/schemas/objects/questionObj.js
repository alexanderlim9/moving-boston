export default {
    name: 'questionObj',
    type: 'object',
    title: 'Question',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Question Number'
      },
      {
        name: 'blocks',
        type: 'array',
        of: [
            {type: 'block'},
            {type: 'contextSlide'}
        ]
      }
    ],
    preview: {
    //   select: {title: 'title'},
        select: {
            title: 'title'
        }
    }
  }
  