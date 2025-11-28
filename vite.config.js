import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/REACT/',
  server: {
    port: 5173,
    open: true,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})
