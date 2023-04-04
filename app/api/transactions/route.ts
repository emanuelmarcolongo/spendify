import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import {  NextResponse } from "next/server";
import { sessionWithAuthOp, TransactionInput } from "@/lib/types"
import { getUserTransactions, postUserTransaction } from "@/lib/transactions";

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
    const session: sessionWithAuthOp | null = await getServerSession(authOptions);

    try {
        if (!session?.user) {
            return NextResponse.json('Não autorizado, faça login e tente novamente', {status: 401})
    }

    const userId = parseInt(session.user.id);

    const {value, type, category, description } = await req.json();

    if (!value || !type || !category) {
        return NextResponse.json('Algo errado com o formulário', {status: 422}) 
    }

    const transactionData: TransactionInput = {
        value: Number(value*100),
        type,
        category,
        description,
        userId
    }

    await postUserTransaction(transactionData);

    return NextResponse.json('Transação registrada com sucesso!', {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json('Algo deu errado', {status: 500})
    }  
}
