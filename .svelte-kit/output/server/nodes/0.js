import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.DXFGdsjX.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.CV5QbAHm.js"];
export const stylesheets = ["_app/immutable/assets/app.BZ0D1hJr.css"];
export const fonts = [];
