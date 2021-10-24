import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  mongoose: {
    enable: true, // 启用插件
    package: 'egg-mongoose', // 包名
  },
};

export default plugin;
