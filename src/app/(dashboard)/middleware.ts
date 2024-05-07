import { withAuth } from 'next-auth/middleware';

export default async function middleware() {
   
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		{
			source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' }
			]
		},

		{
			source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
			has: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' }
			]
		},

		{
			source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
			has: [{ type: 'header', key: 'x-present' }],
			missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }]
		}
	]
};
