import { prisma } from "./prisma";
import { TransactionInput } from "./types";


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
