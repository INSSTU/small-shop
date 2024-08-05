import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入自动导入模块插件
import AutoImport from 'unplugin-auto-import/vite'
// 引入自动导入组件插件
import Components from 'unplugin-vue-components/vite'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // vue相关自动导入配置
      imports:["vue"],

      // 通知TS自动导入的内容
      dts: './src/types/auto-imports.d.ts',

      // 自动导入自定义的模块
      dirs: ['./src/**/*'],

      // 支持自动导入在vue模板中使用
      vueTemplate: true,

    }),
    Components({
      dts: './src/types/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
