import { NextResponse } from 'next/server'
import DB from "../../utils/db";

export async function GET(request: Request) {
    let db = DB()

    let data = await db('users').where('name', '이창민').first()

    return NextResponse.json({
        message: "hi, i'm get",
        result: data
    })
}

export async function POST(request: Request) {

    return NextResponse.json({ message: "hi, i'm post" })
}

export async function DELETE(request: Request) {

    return NextResponse.json({ message: "hi, i'm delete" })
}

export async function PATCH(request: Request) {

    return NextResponse.json({ message: "hi, i'm patch" })
}