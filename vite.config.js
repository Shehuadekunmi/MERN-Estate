import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': { 
        target: 'http://localhost:3000', 
        // https://mern-estate-server-zio1.onrender.com
        secure: false
      },
    },
  },
  plugins: [react()],
})
