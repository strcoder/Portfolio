const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

esbuild.build({
  minify: true,
  bundle: true,
  platform: 'node',
  target: ['node14.15'],
  outfile: 'dist/index.js',
  plugins: [sassPlugin()],
  entryPoints: ['src/server/index.tsx'],
}).catch((e) => console.error(e.message));

esbuild.build({
  minify: true,
  bundle: true,
  outfile: 'dist/public/app.js',
  plugins: [sassPlugin()],
  entryPoints: ['src/frontend/index.tsx'],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
}).catch((e) => console.error(e.message));
