import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // IMPORTANT: use '/' for root hosts like Render
  plugins: [react()]
})
