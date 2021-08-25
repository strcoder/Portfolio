const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

esbuild.build({
  minify: true,
  bundle: true,
  platform: 'node',
  target: ['node14.16'],
  plugins: [sassPlugin()],
  outfile: 'dist/index.js',
  entryPoints: ['src/server/index.tsx'],
}).catch((e) => console.error(e.message));

esbuild.build({
  minify: true,
  bundle: true,
  target: 'es6',
  plugins: [sassPlugin()],
  outfile: 'dist/public/app.js',
  entryPoints: ['src/frontend/index.tsx'],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
}).catch((e) => console.error(e.message));
