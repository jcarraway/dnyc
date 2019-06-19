const withTypescript = require('@zeit/next-typescript');
module.exports = withTypescript({
  // has to be commented out when deploying to Netlify
  // target: 'serverless',
});