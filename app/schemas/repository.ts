import { Schema, model, Types } from 'mongoose'

const { Boolean, String, Date } = Schema.Types

interface IRepository {
    name: string
    description: string
    url: string
    autoPull: boolean
    upTime: Date
    lastUpdate: Date
    branch: string
    lastCommit: string
}

const RepositoryModel = new Schema<IRepository>({
    name: String,
    description: String,
    url: String,
    autoPull: Boolean,
    upTime: Date, 
    lastUpdate: Date,
    branch: String,
    lastCommit: String
})

const Repository = model('Repository', RepositoryModel)

export default Repository