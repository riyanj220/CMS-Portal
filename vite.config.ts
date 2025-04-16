import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  base: '/CMS-Portal/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Add this line to alias '@' to the 'src' directory
    },
  },
  server: {
    host: '0.0.0.0'
  }
})
