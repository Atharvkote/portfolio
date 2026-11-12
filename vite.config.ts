import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

function vercelApiDevPlugin(): Plugin {
  return {
    name: 'vercel-api-dev',
    configureServer(server) {
      const handleApi = (endpoint: string, modulePath: string) => {
        server.middlewares.use(endpoint, async (req, res) => {
          try {
            const mod = await server.ssrLoadModule(modulePath);
            const handler = mod.default;

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
            console.error(`[Vite Dev API] ${endpoint} error:`, err);
            if (!res.headersSent) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
            }
          }
        });
      };

      handleApi('/api/visit', '/api/visit.ts');
      handleApi('/api/github-contributions', '/api/github-contributions.ts');
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
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
