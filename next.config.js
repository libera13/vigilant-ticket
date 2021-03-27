const {PHASE_DEVELOPMENT_SERVER} = require("next/constants")

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER

    return {
        env: {
            REDIRECT_URI: isDev
                ? "http://localhost:3000/api/callback": "",
            POST_LOGOUT_URI: isDev
                ? "http://localhost:3000/"
                : '',
            AUTH0_SCOPE: "openid email profile",
            SERVER_URL: isDev
                ? "http://localhost:3000/"
                : ''
        }
    }
}
