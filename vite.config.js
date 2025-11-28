 import { defineConfig } from 'vite'
 import react from '@vitejs/plugin-react' 
25 / 31
 export default defineConfig({ 
 plugins: [react()], 
base: 'REACT' // добавляем эту строку 
}) 