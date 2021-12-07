// CMS.js Config
var config = {

  // ID of element to attach CMS.js to
  elementId: 'cms',

  // Mode 'GITHUB' for Github Pages, 'SERVER' for Self Hosted
  // Defaults to Server mode if not specified
  mode: 'GITHUB',

  // If Github mode is set, your Github username, repo name, 
  // and branch to get files from.
  github: {
    username: 'wcchin',
    repo: 'wcchin.github.io',
    branch: 'master',
    host: 'https://api.github.com',
    // Use prefix option if your site is located in a subdirectory.
    // prefix: 'subdirectory',
  },

  // The name of the layouts directory.
  layoutDirectory: 'layouts',

  // The error layout template name.
  errorLayout: 'error',

  // The URL that will be the default view that will initially load
  // For example, this could a list view or a could be a specific view
  // like a single page.
  defaultView: 'pages/home',

  // These are the types of content to load. Each type name is a directory or
  // folder where the files, pages or posts are located. Each type has a list
  // and single layout template that will determine how the file will be rendered.
  types: [
    {
    // for example, layouts/post-list.html
    name: 'posts',
      layout: { list: 'post-list', single: 'post' },
    },{
    name: 'publications',
      layout: { list: 'publication-list', single: 'publication' },
    },{
    name: 'mediums',
      layout: { list: 'medium-list', single: 'medium' },
    },{
      name: 'pages',
      layout: { list: 'page-list', single: 'page' },
    },
  ], 
  onroute: scrollTop, 
  markdownEngine: remarkable.render,
  dateFormat: function dateFormat(date) {
      return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('/');
    },
};

// Initialize CMS.js
var blog = new CMS(config);
