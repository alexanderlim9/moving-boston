export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e31d144fb483966c17c0475',
                  title: 'Sanity Studio',
                  name: 'moving-boston-studio',
                  apiId: '1353a4ba-b0dd-4b36-9b75-e832e4a22be5'
                },
                {
                  buildHookId: '5e31d144fe161e0e8ccf89c8',
                  title: 'Blog Website',
                  name: 'moving-boston-web',
                  apiId: '24446c01-5284-49fe-9f07-af0784323d98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexanderlim9/moving-boston',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://moving-boston-web.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
