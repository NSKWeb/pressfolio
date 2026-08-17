import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BCBQJqLS.mjs';
import { manifest } from './manifest_B57aw-8G.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/generate.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/how-it-works.astro.mjs');
const _page4 = () => import('./pages/privacy.astro.mjs');
const _page5 = () => import('./pages/terms.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/generate.ts", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/how-it-works.astro", _page3],
    ["src/pages/privacy.astro", _page4],
    ["src/pages/terms.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3dd21396-8fa5-425b-8039-00c12d5817d5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
