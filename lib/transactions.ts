import { prisma } from "./prisma";


export async function getUserTransactions (userId: number) {
    const userTransactions = await prisma.transactions.findMany({
        where: {
            userId
        }
    })

    return userTransactions
}