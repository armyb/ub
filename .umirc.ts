import { defineConfig } from 'umi';

const { NODE_ENV } = process.env;
console.log("🚀 ~ file: .umirc.ts ~ line 4 ~ NODE_ENV", NODE_ENV)

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  // outputPath: 'build',
  publicPath: NODE_ENV === 'development' ? './' : 'https://armyb.github.io/ub/',
  history:{ type:'hash' }
});
