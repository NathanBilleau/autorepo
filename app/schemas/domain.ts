import { Schema, model, Types } from 'mongoose'
const { String, Boolean, Date, Number, ObjectId} = Schema.Types

interface IDomain {
    domain: string
    port: number
    repository: Types.ObjectId
}

const DomainModel = new Schema<IDomain>({
    domain: String,
    port: Number,
    repository: {
        ref: 'Repository',
        type: ObjectId
    }
})

const Domain = model('Domain', DomainModel)

export default Domain