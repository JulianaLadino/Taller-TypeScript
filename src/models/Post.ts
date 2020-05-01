import {Schema, model} from 'mongoose'

const PostSchema = new Schema({
    title: { type: String, require: true},
    url: {type: String, require: true, unique: true, lowercase: true},
    content: {type: String, require: true},
    image: String,
    createdAt: { type: Date, default: Date.now},
    oudatedAt: Date
});

export default model ('Post', PostSchema);