export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sleep_golden_site/_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.E2YjU2qQ.js","app":"_app/immutable/entry/app.2NqK3LAL.js","imports":["_app/immutable/entry/start.E2YjU2qQ.js","_app/immutable/chunks/entry.pPx6aIL7.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.2NqK3LAL.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.CV5QbAHm.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
