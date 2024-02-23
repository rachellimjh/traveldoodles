import mongoose, {Schema} from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    }
})

const Post = mongoose.model("Post", postSchema);

export {Post}