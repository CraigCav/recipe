const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = {
  pathPrefix: '/recipe',
  siteMetadata: {
    title: 'Recipe',
    description: "Documentation for Recipe, ezCater's design system library",
  },
  developMiddleware: app => {
    app.use(
      '/playroom/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {'/playroom/': ''},
      })
    );
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {sourceMap: false, autoLabel: false},
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../src`,
        ignore: [`**/__tests__/*`, `**/*\.preview\.md`],
        name: 'components',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../CHANGELOG.md`,
        name: 'changelog',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'public/static/images',
            },
          },
        ],
      },
    },
    {
      // polyfill.io
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: [
          'es2015',
          'es2016',
          'es2017',
          'default',
          'NodeList.prototype.forEach',
          'smoothscroll',
          'Reflect.ownKeys',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TJRFGNR',
        includeInDevelopment: false,
        defaultDataLayer: {platform: 'gatsby'},
      },
    },
  ],
};
