import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

    const {name, email, password, confirmPassword} = await req.json();

    const hashPassword = await hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name, email, password: hashPassword
        }
    })

    return NextResponse.json({user: {
        email: user.email
    }}, {status: 201})

}