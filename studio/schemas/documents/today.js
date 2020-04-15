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
      name: 'intro',
      type: 'string',
      title: 'Intro',
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
      name: 'sectionOneTitle',
      type: 'string',
      title: 'Section 1 Title'
    },
    {
      name: 'sectionTwoTitle',
      type: 'string',
      title: 'Section 2 Title'
    },
    {
      name: 'sectionTwoContent',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'linkToInfo',
      title: 'Link to Additional Info',
      type: 'url',
    },
    {
      name: 'outro',
      title: 'End of section content',
      type: 'string'
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
}
