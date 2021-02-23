import { ITodo } from '../types/todoType'
import { Schema, model } from 'mongoose'

const todoSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status:{
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

export default model<ITodo>('Todo', todoSchema)