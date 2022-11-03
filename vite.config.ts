import { UserConfigExport, ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteAliases } from 'vite-aliases'
import vitePluginImp  from 'vite-plugin-imp'
import { viteMockServe } from 'vite-plugin-mock'


// https://vitejs.dev/config/
export default ({command }: ConfigEnv):UserConfigExport =>{
  return {
    plugins: [
      react(),
      ViteAliases(),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: (name) => `antd/es/${name}/style`
          }
        ]
      }),
      viteMockServe({
        mockPath: './mock',
        localEnabled: command === 'serve'
      })
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#4377FE',//设置antd主题色
          }
        }
      }
    }
  }
}

