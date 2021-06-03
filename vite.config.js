import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh()],
  server: {
    hmr: {
      port: 443,
    },
    proxy: {
      '/query': {
        target: 
        'https://Backend-Server-Final-Project.ecs162instruct.repl.co',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },

}