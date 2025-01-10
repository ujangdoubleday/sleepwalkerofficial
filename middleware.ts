import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/maintenance', '/:path*'],
};

export async function middleware(request: NextRequest) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  if (isMaintenanceMode) {

    const excludedPaths = [
      '/maintenance',
      '/_next',
      '/favicon.ico',
      '/public',
      '/images',
    ];

    if (excludedPaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
      return NextResponse.next();
    }
  
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }

  if (request.nextUrl.pathname === '/maintenance') {
    return NextResponse.redirect(new URL(`/`, request.url));
  }

  return NextResponse.next();
}