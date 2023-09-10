import { NextResponse } from 'next/server'
import connection from '../../utils/db'

export async function GET(request: Request) {
    // connection.connect();

    connection.query('SELECT * FROM users WHERE ?', {name: 'test123'}, function (error, results, fields) {
        if (error) throw error;
        console.log('results info:', results);
    });

    return NextResponse.json({
        message: "hi, i'm get",
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