// Import express
const express = require("express");
const cors = require("cors");
const app = express()
const port = 2000;
// require("dotenv").config();


app.use(cors());
app.use(express.json());


// Import routes
const usersRoute = require("./src/routes/userRouter");

// Define routes
app.use("/users", usersRoute);

// localhost
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
