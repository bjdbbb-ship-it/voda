import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const isAdmin = request.cookies.get('admin_session')?.value === 'true';

    // Protect /admin/dashboard and other admin routes (except login and login api)
    if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
        if (!isAdmin) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
