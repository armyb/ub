import { defineConfig } from 'umi';
import routes from './routes'
const { NODE_ENV } = process.env;
console.log("🚀 ~ file: .umirc.ts ~ line 4 ~ NODE_ENV", NODE_ENV)

export default defineConfig({
 title: '管理平台业务模版1',
  routes,
  // outputPath: 'build',
  publicPath: NODE_ENV === 'development' ? './' : 'https://armyb.github.io/ub/',
  history:{ type:'hash' },
  proxy: {
    '/api': {
      target: 'http://128.1.1.1:8000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});