import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";



export async function POST(req: Request) {

    try {

    const {name, email, password, confirmPassword} = await req.json();

    if (password !== confirmPassword) {
        return new NextResponse(JSON.stringify({
            error: 'As senhas devem ser iguais'
          }),
           {status: 400})
    }


    const userExists = await prisma.user.findFirst({
        where: {
            email
        }
    })

    if (userExists) {
        return new NextResponse(JSON.stringify({
            error: 'Já existe um usuário cadastrado com esse e-mail'
          }),
           {status: 409})
    }

    
    const hashPassword = await hash(password, 10);
    const user = await prisma.user.create({
        data: {
            name, email, password: hashPassword
        }
    })

    return NextResponse.json({user: {
        email: user.email
    }}, {status: 201})
        
    } catch (err: any) {
     return new NextResponse(JSON.stringify({
       error: 'Algo deu errado, tente novamente'
     }),
      {status: 500})
    }

    

}