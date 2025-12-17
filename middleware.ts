import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Only protect /admin routes (except login page)
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next()
  }

  // Allow access to login page
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  // Check for admin session cookie
  const adminSession = req.cookies.get('admin_session')

  if (adminSession?.value === 'authenticated') {
    return NextResponse.next()
  }

  // Redirect to login if not authenticated
  const loginUrl = new URL('/admin/login', req.url)
  loginUrl.searchParams.set('redirect', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/admin/:path*'],
}


