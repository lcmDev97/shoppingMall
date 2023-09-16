import { NextResponse } from 'next/server'
import DB from "../utils/db";

export async function POST(request: Request) {
    const session = await useSession(request)
    const body = await request.json()
    if(!body) return NextResponse.json({ code: 400, message: 'bad request' })

    const {name, password, confirmPassword} = body
    if(!name || !password || !confirmPassword) return NextResponse.json({ code: 400, message: 'bad request' })

    if(password !== confirmPassword) return NextResponse.json({ code: 400, message: 'bad request'})

    const db = DB()

    // Skip password encryption
    let inData = {
        name,
        password,
        created_at: new Date()
    }

    await db('users').insert(inData)

    return NextResponse.json({ code: 200, message: 'OK' })
}
