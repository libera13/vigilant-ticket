import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";

export default function TicketPage(req: NextApiRequest, res: NextApiResponse)  {
    res.status(200).json({"2s" : req.query.ticketNr})
}
