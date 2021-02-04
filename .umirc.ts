import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  // outputPath: 'build',
  publicPath: 'https://armyb.github.io/ub/',
});
