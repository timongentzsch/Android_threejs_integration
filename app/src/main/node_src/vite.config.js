import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Set base to relative path for Android WebView compatibility
  base: './',
  
  // Path alias configuration
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.')
    }
  },
  
  // Build configuration
  build: {
    outDir: '../assets',
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  
  // Asset handling
  assetsInclude: [
    '**/*.gltf',
    '**/*.glb',
    '**/*.hdr',
    '**/*.tga',
    '**/*.babylon',
    '**/*.mtl',
    '**/*.pcb',
    '**/*.pcd',
    '**/*.prwm',
    '**/*.obj',
    '**/*.mat',
    '**/*.mp3',
    '**/*.ogg'
  ],
  
  // Development server configuration
  server: {
    port: 3000,
    open: true
  },
  
  // Root directory
  root: '.'
}); 