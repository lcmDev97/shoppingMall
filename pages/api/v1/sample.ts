
export default async function handler(req: Request, res: Response) {
    if(req.method === 'GET') return res.json({ message: 'hi GET' })

    if(req.method === 'POST') {
        const body = req.body
        if(!body) return res.json({ code: 400, message: 'bad request' })
        return res.json({message: 'hi POST', bodt: body})
    }

    return res.json({ message: 'hi' })
}