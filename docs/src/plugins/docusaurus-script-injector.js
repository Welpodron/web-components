// A JavaScript function that returns an object.
// `context` is provided by Docusaurus. Example: siteConfig can be accessed from context.
// `opts` is the user-defined options.
module.exports = function (context, opts) {
    const baseUrl = context.siteConfig.baseUrl;

    return {
      // A compulsory field used as the namespace for directories to cache
      // the intermediate data for each plugin.
      // If you're writing your own local plugin, you will want it to
      // be unique in order not to potentially conflict with imported plugins.
      // A good way will be to add your own project name within.
      name: 'docusaurus-script-injector',
      // Inject head and/or body HTML tags.
      injectHtmlTags() {
        // console.log(opts);
        return {
          headTags: [
            `<link rel="stylesheet" href="${baseUrl}css/collapse/style.css" type="text/css">`,
            `<link rel="stylesheet" href="${baseUrl}css/carousel/style.css" type="text/css">`,
            `<link rel="stylesheet" href="${baseUrl}css/tabs/style.css" type="text/css">`,
            `<link rel="stylesheet" href="${baseUrl}css/modal/style.css" type="text/css">`,
          ],
          postBodyTags: [
            `<script src="${baseUrl}js/core/script.js"></script>`,
            `<script src="${baseUrl}js/animation/script.js"></script>`,
            `<script src="${baseUrl}js/collapse/script.js"></script>`,
            `<script src="${baseUrl}js/accordion/script.js"></script>`,
            `<script src="${baseUrl}js/tabs/script.js"></script>`,
            `<script src="${baseUrl}js/carousel/script.js"></script>`,
            `<script src="${baseUrl}js/modal/script.js"></script>`
          ],
        };
      },
    };
  }