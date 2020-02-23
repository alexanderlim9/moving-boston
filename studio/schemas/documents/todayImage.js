export default {
    name: 'todayImage',
    type: 'document',
    title: 'Today Image',
    fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          description: 'This is to differentiate image from one another'
        },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Image'
      }
    ],
    /* preview: {
      select: {
        title: 'name',
        subtitle: 'slug.current',
        media: 'image'
      }
    } */
  }
  