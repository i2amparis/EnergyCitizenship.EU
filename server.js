// Production entry: adapter-node's handler behind a thin layer of security headers.
// Prerendered pages are served by the handler's static middleware, which bypasses
// hooks.server, so headers are set here to cover every response.
import { createServer } from 'node:http';
import { handler } from './build/handler.js';

const HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'X-Frame-Options': 'DENY',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin'
};

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? '0.0.0.0';

createServer((req, res) => {
	for (const [k, v] of Object.entries(HEADERS)) res.setHeader(k, v);
	if (req.url?.startsWith('/_app/immutable/')) {
		res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
	}
	handler(req, res, () => {
		res.statusCode = 404;
		res.end('Not found');
	});
}).listen(port, host, () =>
	console.log(`EnergyCitizenship.eu listening on http://${host}:${port}`)
);
