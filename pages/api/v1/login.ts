import DB from "./utils/db";

export default async function handler(req: Request, res: Response) {
    const body = await req.body
    if(!body) return res.json({ code: 400, message: 'bad request' })

    const {id, password} = body
    if(!id || !password) return res.json({ code: 400, message: 'bad request' })

    const db = DB()

    const user = await db('users')
        .where('id', id)
        .where('password', password)
        .first()

    if(!user) return res.json({ code: 404, message: 'should check id, password' })

    return res.json({ code: 200, message: 'OK', result: user })
}
