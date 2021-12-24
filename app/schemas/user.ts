import { Schema, model, Types } from 'mongoose'
const { ObjectId, String, Boolean, Date, Number } = Schema.Types

interface IUser {
    name: string
    email: string
    token: string
    picture: string
}

const UserModel = new Schema<IUser>({
    name: String,
    email: String,
    token: String,
    picture: String
})

const User = model('User', UserModel)

export default User