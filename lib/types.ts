export type sessionWithAuthOp = {
    user: {
        name: string,
        email: string,
        image: string,
        id: string
    }
}

export type TransactionProps = {
    id: number,
    value: number,
    userId: number,
    category: string,
    type: string,
    description: string | null,
    createdAt: string | Date,
}

export type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>