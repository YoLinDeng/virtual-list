import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import template from 'vite-plugin-template'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), template()],
  resolve: { 
  alias: {
		  '@': path.resolve(__dirname,'./src'), //把 src 的别名设置为 @
	  }
  },
  server: {
    https: false, // 是否开启 https
    open: true, // 是否自动在浏览器打开
    port: 8888, // 端口号
    host: "localhost",
    hmr: true,
  }
})
