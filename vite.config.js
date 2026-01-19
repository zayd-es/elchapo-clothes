import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // هاد السطر هو اللي كيهمنا
    allowedHosts: ["chancelled-imaginative-dagmar.ngrok-free.dev"],
    proxy: {
      '/api': 'http://localhost:1337',
      '/uploads': 'http://localhost:1337',
    }
  }
})