const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo_2.png","logo_favicon.ico","logo_ico.svg","normalize.css","prettify.css","style.css"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.c0cfab29.js","app":"_app/immutable/entry/app.0b9d9aa1.js","imports":["_app/immutable/entry/start.c0cfab29.js","_app/immutable/chunks/index.f7580e40.js","_app/immutable/chunks/index.dd1c5037.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.0b9d9aa1.js","_app/immutable/chunks/index.f7580e40.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-42692a0b.js')),
			__memo(() => import('./chunks/1-a57fc29e.js')),
			__memo(() => import('./chunks/2-76cf6c10.js')),
			__memo(() => import('./chunks/3-412c1626.js')),
			__memo(() => import('./chunks/4-dd651aae.js')),
			__memo(() => import('./chunks/5-401627e3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/interactive_map",
				pattern: /^\/interactive_map\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/interactive_map/[energyCommunities]",
				pattern: /^\/interactive_map\/([^/]+?)\/?$/,
				params: [{"name":"energyCommunities","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
