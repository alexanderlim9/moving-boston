export default {
  name: 'today',
  type: 'document',
  title: 'Today',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
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
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'images',
      type: 'array',
      title: 'Section Images',
      of: [
        {
          type: 'reference',
          to: {
            type: 'todayImage'
          }
        }
      ]
    }
  ]
  /* preview: {
      select: {
        title: 'name',
        subtitle: 'slug.current',
        media: 'image'
      }
    } */
}
