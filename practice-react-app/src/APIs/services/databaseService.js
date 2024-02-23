import http from "../common.js"

//test route
const getTest = async () => {
    return http.get("/test")

}

//make post
const addPost = async(data) =>{
    return http.post("/addPost",data)
}

const getPost = async () => {
    return http.get("/getPost")
}

const DatabaseService =  {
    getTest,
    addPost,
    getPost
}

export default DatabaseService;
