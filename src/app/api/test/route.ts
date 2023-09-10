import { NextResponse } from 'next/server'

export async function GET(request: Request) {

    return NextResponse.json({ message: "hi" })
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