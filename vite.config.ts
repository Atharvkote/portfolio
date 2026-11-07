import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function vercelApiDevPlugin(): Plugin {
  return {
    name: 'vercel-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/visit', async (req, res) => {
        try {
          const mod = await server.ssrLoadModule('/api/visit.ts');
          const handler = mod.default;

          // Polyfill Vercel-specific response helpers on Node's ServerResponse
          const vercelRes = Object.assign(res, {
            status(code: number) {
              res.statusCode = code;
              return this;
            },
            json(data: unknown) {
              if (!res.headersSent) {
                res.setHeader('Content-Type', 'application/json');
              }
              res.end(JSON.stringify(data));
              return this;
            },
          });

          await handler(req, vercelRes);
        } catch (err) {
          console.error('[Vite Dev API] /api/visit error:', err);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
          }
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from .env into process.env for local development
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [react(), tailwindcss(), vercelApiDevPlugin()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/react-router-dom/')
            ) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/framer-motion/')) {
              return 'vendor-motion';
            }
            if (id.includes('node_modules/lenis/')) {
              return 'vendor-lenis';
            }
          },
        },
      },
    },
  };
})
