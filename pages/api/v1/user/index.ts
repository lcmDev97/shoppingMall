import { res } from 'next/server'
import DB from "../utils/db";

export default async function Main(req: Request, res: Response) {
    const httpMethod = req.method
    if(httpMethod === 'GET') {
        console.log("GET HTTP")
        await GetAllUsers(req, res)
    }

    if(httpMethod === 'POST') {
        console.log("POST HTTP")
        await CreateUser(req, res)
    }


}

export async function GetAllUsers(req: Request, res: Response) {
    let db = DB()

    let data = await db('users')

    return res.json({ code: 200, message: 'OK', result: data })
}

export async function CreateUser(req: Request, res: Response) {
    const body = await req.body
    if(!body) return res.json({ code: 400, message: 'bad request' })

    const {id, name, password, confirmPassword} = body
    if(!id || !name || !password || !confirmPassword) return res.json({ code: 400, message: 'bad request' })

    if(password !== confirmPassword) return res.json({ code: 400, message: 'bad request'})

    const db = DB()

    const dupUser = await db('users').where('id', id).first()
    if(dupUser) return res.json({ code: 400, message: 'user already exists' })

    // Skip password encryption
    let inData = {
        id,
        name,
        password,
        created_at: new Date()
    }

    await db('users').insert(inData)

    return res.json({ code: 200, message: 'OK', result: inData })
}

// export async function DELETE(req: Request, res: Response) {
//
//     return res.json({ message: "hi, i'm delete" })
// }
//
// export async function PATCH(req: Request, res: Response) {
//
//     return res.json({ message: "hi, i'm patch" })
// }