module.exports = {
  // css 配置
  css: {
    loaderOptions: {
      less: {
        // 全局引入变量和 mixin
        globalVars: {
          hack: `
            true;
            @import '~@/assets/styles/variables.less';
            @import '~@/assets/styles/mixins.less';
          `,
        },
      },
    },
  },
};
