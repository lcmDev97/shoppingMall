import { NextResponse } from 'next/server'
import DB from "../utils/db";

export async function GET(request: Request) {
    let db = DB()

    let data = await db('users').where('name', '이창민').first()

    return NextResponse.json({
        message: "hi, i'm get",
        result: data
    })
}

export async function POST(request: Request) {
    const body = await request.json()
    if(!body) return NextResponse.json({ code: 400, message: 'bad request' })

    const {id, name, password, confirmPassword} = body
    if(!id || !name || !password || !confirmPassword) return NextResponse.json({ code: 400, message: 'bad request' })

    if(password !== confirmPassword) return NextResponse.json({ code: 400, message: 'bad request'})

    const db = DB()

    const dupUser = await db('users').where('id', id).first()
    if(dupUser) return NextResponse.json({ code: 400, message: 'user already exists' })

    // Skip password encryption
    let inData = {
        name,
        password,
        created_at: new Date()
    }

    await db('users').insert(inData)

    return NextResponse.json({ code: 200, message: 'OK', result: inData })
}

// export async function DELETE(request: Request) {
//
//     return NextResponse.json({ message: "hi, i'm delete" })
// }
//
// export async function PATCH(request: Request) {
//
//     return NextResponse.json({ message: "hi, i'm patch" })
// }