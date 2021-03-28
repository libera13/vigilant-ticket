const {PHASE_DEVELOPMENT_SERVER} = require("next/constants")

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER

    return {
        env: {
            REDIRECT_URI: isDev
                ? "api/init" : "api/init",
            POST_LOGOUT_URI: isDev
                ? "http://localhost:3000/"
                : 'https://vigilant-ticket.vercel.app/',
            AUTH0_SCOPE: "openid email profile",
            SERVER_URL: isDev
                ? "http://localhost:3000/"
                : 'https://vigilant-ticket.vercel.app/'
        }
    }
}
