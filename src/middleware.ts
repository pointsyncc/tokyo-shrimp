// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  if(process.env.NODE_ENV === "development") return;
  return NextResponse.redirect(new URL('/status/coming-soon', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/about', '/contact'],
};
