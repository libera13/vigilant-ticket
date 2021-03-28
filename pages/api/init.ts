import { NextApiHandler } from "next"
import auth0 from "../../lib/auth0"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const init: NextApiHandler = async (req, res) => {
    try {
        const session = await auth0.getSession(req, res);
        const sessionUser = session.user;

        console.log('sessionUser', sessionUser)

        const sub: string = sessionUser.sub;
        const nickname: string = sessionUser.nickname
        const email: string = sessionUser.email
        const name: string = sessionUser.name
        const picture: string = sessionUser.picture

        let user = await prisma.user.findFirst({ where: { userId: sub } })

        if (!user) {
            user = await prisma.user.create({
                data: {
                    email: email,
                    handle: nickname,
                    name: name,
                    picture: picture,
                    userId: sub,
                    Ticket: {
                        create: {
                        }
                    }
                }
            })
        } else {
            user = await prisma.user.update({
                where: {
                    userId: user.userId,
                },
                data: {
                    email: email,
                    handle: nickname,
                    name: name,
                    picture: picture,
                    userId: sub,
                }
            })
        }

        const ticket = await prisma.ticket.findFirst){
            where: {userId : user. }
        }


        // await auth0.handleLogin(req, res)
    } catch (e) {
        console.log(e)
        res.status(e.status || 500).end(e.message)
    }
}

export default init