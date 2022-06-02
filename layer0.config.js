module.exports = {
  connector: '@layer0/next',
  // backends: {
  //   api: {
  //     domainOrIp: 'layer0-docs-layer0-examples-api-default.layer0.link',
  //     hostHeader: 'layer0-docs-layer0-examples-api-default.layer0.link',
  //   },
  // },

  backends: {
    legacy: {
      default: 'app.layer0.co/stevemurphy/layer0git-nextjs-example/env/traffic-splitting-new-env',
    },
  },
}