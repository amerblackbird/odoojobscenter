import {NextRequest, NextResponse} from "next/server";
import {getSessionCookie} from "better-auth/cookies";


export async function middleware(request: NextRequest) {

    // Retrieve the session cookie from the request
    const sessionCookie = getSessionCookie(request);

    // Extract the pathname from the request URL
    const pathname = request.nextUrl.pathname;

    // Check if the request is for a public route
    const isPublic = pathname === "/login";

    if (pathname.startsWith("/dashboard") && !sessionCookie) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (isPublic && sessionCookie) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    // matcher: ['/((?!api|_next|.*\\..*).*)'],
    matcher: ["/dashboard", "/login"],
};