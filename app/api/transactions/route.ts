import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import {  NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sessionWithAuthOp } from "@/lib/types"
import { getUserTransactions } from "@/lib/transactions";

export async function GET(req: Request) {
    const session: sessionWithAuthOp | null = await getServerSession(authOptions);

    try {
        if (!session?.user) {
            return NextResponse.json('Não autorizado, faça login e tente novamente', {status: 200})
        }
    
        const userId = parseInt(session.user.id);


        const userTransactions = await getUserTransactions(userId);

        return NextResponse.json(userTransactions, {status: 200})
    } catch (error) {
        return NextResponse.json('Algo deu errado', {status: 500})
    }  
}


export async function POST(req: Request) {
 
    try {
        
    } catch (error) {
        console.log(error);
    }

}
