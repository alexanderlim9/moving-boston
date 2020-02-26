export default {
    name: 'question1',
    type: 'document',
    title: 'Question 1',
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
        name: 'introNextDescription',
        description: 'this goes in the intro slide before the question',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'introNextTitle',
        description: 'e.g., How will they get around?',
        type: 'string',
        title: 'CTA title'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
    ]
  }
  