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
    location: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String 
    },
    type: {
        required: true,
        type: String
    },
    postID: {
        required: true,
        type: String
    }
})

const Post = mongoose.model("Post", postSchema);

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    groupID: {
        required: true,
        type: Array
    },
    posts: {
        required: true,
        type: Array
    }

})

const User = mongoose.model("User", userSchema);

const groupSchema = new mongoose.Schema({
    groupName: {
        required: true,
        type: String
    },
    groupID: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: Array
    }
})

const Group = mongoose.model("Group", groupSchema);

export {Post, User, Group}