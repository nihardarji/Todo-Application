import { Document } from 'mongoose'

export interface ITodo extends Document {
    name: string,
    description: string,
    status: boolean
}

// To extend node env typings
declare global {
    namespace NodeJS
    {
        export interface ProcessEnv
        {
            NODE_ENV: "development" | "production" | "test";
            MONGO_URI: string
        }
    }
}