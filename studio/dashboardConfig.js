export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60886628eee0df00d1a92b19',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jr9gbwb7',
                  apiId: '84d3d29e-161d-45e7-844e-2244b962750b'
                },
                {
                  buildHookId: '60886628d99ed710ea3bb79c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-e1t5c4sp',
                  apiId: '21867a52-6445-434a-b3c3-378bbbaaa95b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bgarraud/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-e1t5c4sp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
