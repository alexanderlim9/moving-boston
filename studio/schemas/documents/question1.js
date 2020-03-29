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
        name: 'introText1',
        description: 'First sentence of the intro.',
        type: 'text',
        title: 'Intro Text 1'
      },
      {
        name: 'introText2',
        description: 'Second sentence of the intro.',
        type: 'text',
        title: 'Intro Text 2'
      },
      {
        name: 'introText3',
        description: 'Third sentence of the intro.',
        type: 'text',
        title: 'Intro Text 3'
      },
      {
        name: 'question1',
        description: 'e.g., How will they get around?',
        type: 'string',
        title: 'Question'
      }
    ]
  }
  