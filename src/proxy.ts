import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
/////Logic part
export function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname
    
    const isPublicPath = path==='/login' || path==='/signup' || path==='/verifyemail'

    const token = request.cookies.get('token')?.value || '' //getting token if avail from the request

    //if public page and token avail then redirect
    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/profile', request.nextUrl)) //creating new url and redirecting to it
    }

    //if private page and no token avail then redirect
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
//matching part: on what routes u want to run proxy
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/verifyemail'
  ]
}