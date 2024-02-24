import http from "./common.js"

//make new User
const addUser = async (data) => {
    return http.post("/addUser", data);
};

const getUser = async() =>{
    return http.get("/getUser")
}

/*// save User Info (for those that log in through Google)
const saveUser = async (data) => {
    return http.post("/saveUserInfo", data);
}*/

//make post
const addPost = async(data) =>{
    return http.post("/addPost",data)
}

const getPost = async () => {
    return http.get("/getPost")
}

const DatabaseService =  {
    addUser,
    addPost,
    getPost,
    getUser,
    // saveUser
}

export default DatabaseService;