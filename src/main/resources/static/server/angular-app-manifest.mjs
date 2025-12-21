
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 607, hash: '3874d67ac34508ea5f286dbd84b1e28556a8927cd7d340ddcdab7dff152d78ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 891, hash: '3fae3d22485f561f0c9c6abb6764553c4701d3de67bda4848652b87fa40859d2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21668, hash: '58ce813d06668f6530efd55048821dbf5c640ec3ba67dc81d153db4537a4726c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ADN2MJAK.css': {size: 702, hash: 'HKUZ9asdEDU', text: () => import('./assets-chunks/styles-ADN2MJAK_css.mjs').then(m => m.default)}
  },
};
