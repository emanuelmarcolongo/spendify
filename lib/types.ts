export type sessionWithAuthOp = {
    user: {
        name: string,
        email: string,
        image: string,
        id: string
    }
}



export type Transaction = {
    id: number,
    userId: number,
    value: number,
    category: string,
    createdAt: string
    description: string | null,
    type: string
}



export type transactionData = {
  transactions:
  Transaction[] | undefined
}


export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>