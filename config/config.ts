import { defineConfig } from 'umi';
const { NODE_ENV } = process.env;
console.log("🚀 ~ file: .umirc.ts ~ line 4 ~ NODE_ENV", NODE_ENV)

export default defineConfig({
  title: '管理平台业务1',
  // outputPath: 'build',
  // publicPath: NODE_ENV === 'development' ? './' : 'https://armyb.github.io/ub/',
  publicPath:'./',
  hash: true,
  dva: {
    hmr: true,
  },
  antd: {},
   // 是否启用按需加载
  // dynamicImport: {},
  // 设置 node_modules 目录下依赖文件的编译方式
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    '@primary-color': '#5f9df5',
  },
  history:{
    type:'hash'
  },
  proxy: {
    '/api': {
      target: 'http://128.1.1.1:8000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});