import {NextRequest, NextResponse} from "next/server";
// import {createAuthClient} from "better-auth/client";

// const client = createAuthClient()
//
export async function middleware(request: NextRequest) {
    // const {data: session} = await client.getSession(
    //     {
    //         fetchOptions: {
    //             headers: {
    //                 cookie: request.headers.get("cookie") || "",
    //             },
    //         }
    //     }
    // );

    // const pathname = request.nextUrl.pathname;
    //
    // const isPublic = pathname === "/authenticate";
    //
    // if (pathname.startsWith("/home") && !session) {
    //     return NextResponse.redirect(new URL("/authenticate", request.url));
    // }
    //
    // if (isPublic && session) {
    //     return NextResponse.redirect(new URL("/home", request.url));
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
    // matcher: ["/home", "/authenticate"],
};