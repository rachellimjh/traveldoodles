import express from "express";
import { User } from "../model/model.js";

const authRouter = express.Router();//POST initialise tokens for devs, find by email
// body have to look like
// {
//   email: String
// }
authRouter.post("/initialiseToken", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send("Null");
    } else {
      const clientSecret = crypto.randomBytes(32).toString("hex");
      const clientID = user._id.toString();
  
      const newUser = await User.findOneAndUpdate(
        { email: req.body.email },
        {
          clientID: clientID,
          clientSecret: clientSecret,
        },
        { returnOriginal: false }
      );
  
      res.send(newUser);
    }
  });
  //get user info
authRouter.get("/getUserInfo", async (req, res) => {
  const user = await User.findOne({ clientID: req.headers.clientid });
  if (!user) {
    res.status(401).json({ code: 401, message: "Unauthorised" });
  } else if (user.clientSecret !== req.headers.clientsecret) {
    res.status(401).json({ code: 401, message: "Unauthorised" });
  } else {
    res.status(200).json({
      username: user.username,
      email: user.email,
      age: user.age,
      weight: user.weight,
      height: user.height,
    });
  }
});

// save User Info (for those that log in through Google)
authRouter.post("/addUserInfo", async (req, res) => {
  try {
      const { clientID, clientSecret } = req.headers;
      const user = await User.findOne({ clientID });

      if (!user || user.clientSecret !== clientSecret) {
          return res.status(401).json({ code: 401, message: "Unauthorized" });
      }

      // Create a new User object with the retrieved username
      const newUser = new User({
          username: req.headers,
          password:""
      });

      // Save the new user
      const savedUser = await newUser.save();
      res.status(200).json(savedUser); // Respond with the saved user object
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message }); // Handle any errors
  }
});

export { authRouter };
  
