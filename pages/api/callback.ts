import {NextApiHandler} from "next"
import auth0 from "../../lib/auth0"

const callback: NextApiHandler = async (req, res) => {
    try {
        await auth0.handleCallback(req, res, {redirectUri: `${process.env.SERVER_URL}api/init`})
    } catch (e) {
        console.log(e)
        res.status(e.status || 500).end(e.message)
    }
}

export default callback
