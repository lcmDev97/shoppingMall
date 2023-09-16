import { NextResponse } from 'next/server'
import DB from "../utils/db";

export async function POST(request: Request) {
    const body = await request.json()
    if(!body) return NextResponse.json({ code: 400, message: 'bad request' })

    const {id, password} = body
    if(!id || !password) return NextResponse.json({ code: 400, message: 'bad request' })

    const db = DB()

    const user = await db('users')
        .where('id', id)
        .where('password', password)
        .first()

    if(!user) return NextResponse.json({ code: 404, message: 'should check id, password' })

    return NextResponse.json({ code: 200, message: 'OK', result: user })
}
