import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {port:5173},

  // Local dev dùng /
  // Deploy thì có thể set VITE_BASE_PATH nếu cần
  base: mode === 'development' ? '/' : (process.env.VITE_BASE_PATH || '/')
}))