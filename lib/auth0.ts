import { initAuth0 } from "@auth0/nextjs-auth0"


console.log(process.env.REDIRECT_URI)
export default initAuth0( ({
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    baseURL: process.env.SERVER_URL,
    issuerBaseURL: process.env.AUTH0_CLIENT_DOMAIN,
    routes: {
        postLogoutRedirect: process.env.POST_LOGOUT_URI,
        callback: process.env.REDIRECT_URI
    },
    authorizationParams: {
        scope: process.env.AUTH0_SCOPE
    },
    secret: process.env.SESSION_COOKIE_SECRET
}))
