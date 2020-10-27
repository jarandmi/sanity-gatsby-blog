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
                  buildHookId: '5f98a419c0c8e12f6a812cbf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gnh9om2s',
                  apiId: 'f11a8f5e-bcb0-4675-aa0e-cc74fd6b9a3c'
                },
                {
                  buildHookId: '5f98a419c0c8e12635813480',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-aquk5jue',
                  apiId: '1c160345-ce53-4a7f-adfb-84e6f55c97b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jarandmi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-aquk5jue.netlify.app', category: 'apps' }
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
