import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { prisma } from "./prisma";
import { TransactionInput, sessionWithAuthOp } from "./types";


export async function getUserTransactions (userId: number) {
    const userTransactions = await prisma.transactions.findMany({
        where: {
            userId
        }
    })

    return userTransactions
}


export async function postUserTransaction (data: TransactionInput) {
    
    await prisma.transactions.create({
        data
    })

    return;
}

export async function getTransactions () {
    const session: sessionWithAuthOp | null = await getServerSession(authOptions);
    if (!session?.user) return;

    const userId = parseInt(session?.user.id)

    const data = await prisma.transactions.findMany({
        where: {
            userId
        }
    })

    if(!data) {
        return [];
    }

    const transactions = data.reverse();
    return transactions?.map((i) => ({
        ...i,
        createdAt: i.createdAt.toISOString(),
      }));
}

export async function deleteTransaction (id: number) {
    
    return await prisma.transactions.delete({
        where: {
            id
        }
    })
    
}
