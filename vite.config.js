import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Edvin-portfolio/',  // <-- this line is critical!
  plugins: [react()],
})
