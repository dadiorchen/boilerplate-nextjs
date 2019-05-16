module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      '/en/': { page: '/index' },
      '/zh/': { page: '/index', query : {ln : 'zh'} },
    };
  }
};
