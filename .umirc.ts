import { defineConfig, MicroApp } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index.tsx',
      // component: '@/layouts/index.tsx',
      routes: [
        {
          path: '/index',
          compoent: '@/pages/index.tsx',
          exact: true,
        },
        // {
        //   path: '/App1',
        //   microApp: 'app1'
        // }
      ]
    },
  ],
  fastRefresh: {},

  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1',
          entry: 'http://localhost:8001'
        }
      ]
    }
  }
});
