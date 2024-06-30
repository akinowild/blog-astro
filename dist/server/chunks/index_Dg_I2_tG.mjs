export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_Bp18S_MO.mjs').then(n => n.e);

export { page };
