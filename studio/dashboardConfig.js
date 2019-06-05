export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5cf7e8600308f650aa70c47d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ftwsy9eh',
                  apiId: '59fd91fb-6e6b-4895-9a90-2fba53449c9d'
                },
                {
                  buildHookId: '5cf7e860742f14ed56e3a143',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7x7pupmm',
                  apiId: 'c3f5f37b-4b43-4c04-bedf-94f9672af9d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AnnaLinka/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-7x7pupmm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
