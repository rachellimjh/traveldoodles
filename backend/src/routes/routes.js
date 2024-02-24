import express from 'express'
import { Group, Post, User } from '../model/model.js';

const APIrouter = express.Router();

//Add post
APIrouter.post("/addPost", (req, res) => {
    const newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      username: req.body.username,
      image: req.body.image,
      date: req.body.date,
      type: req.body.type,
      postID: req.body.postID
    });
  
    newPost
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
  });

//get post
APIrouter.get("/getPost", (req, res) => {
  Post.find()
    .then((found) => {
      res.send(found);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

//addUser
APIrouter.post("/addUser", (req, res) => {
  //console.log("backend add user: " + req.body + req.body.username + req.body.password)
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    groupID: req.body.groupID,
    posts: req.body.posts
  });
  newUser
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

//get User
APIrouter.get("/getUser", (req, res) => {
User.find()
  .then((found) => {
    res.send(found);
  })
  .catch((err) => {
    console.log(err);
    res.send(err.message);
  });
});

//get User by ID
APIrouter.get("/getUser/: username", (req, res) => {
  User.findOne({username: req.params.username})
    .then((found) => {
      if (found == null){
        res.send("Null");
      }
      else {
        res.send(found);
      }
    })
    .catch((err) => {
      res.send(err.message);
    });
  });

//addGroup
APIrouter.post("/addGroup", (req, res) => {
  const newGroup = new Group({
    groupName: req.body.groupName,
    groupID: req.body.groupID,
    username: req.body.username
  });

  newGroup
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

//get group
APIrouter.get("/getGroup", (req, res) => {
Group.find()
  .then((found) => {
    res.send(found);
  })
  .catch((err) => {
    console.log(err);
    res.send(err.message);
  });
});

//updateUserGroup groupID//
APIrouter.put("/updateUserGroup/:username", (req, res) => {
  const username = req.params.username; // Extract username from URL parameters
  const groupID = req.body.groupID; // Extract updated user information from request body

  // Define an object to hold the update operation
  const updateOperation = {
    $push: {
      groupID: groupID // Append the new groupID to the groupID array
    }
  };

  // Find the user by username and update their information
  User.findOneAndUpdate(
    { username: username }, // Find user by username
    updateOperation, // Update with the new fields
    { new: true, upsert: true } // To return the updated document and create a new one if not found
  )
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).send("User not found");
      }
      res.send(updatedUser); // Send the updated user object in response
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error"); // Handle internal server error
    });
});

//updateGroupUser Append the usernames to the group//
APIrouter.put("/updateGroupUser/:groupID", async (req, res) => {
  const groupID = req.params.groupID; // Extract groupID from URL parameters
  const username = req.body.username; // Extract updated user information from request body

  try {
    // Check if the groupID exists in the database
    const existingGroup = await Group.findOne({ groupID: groupID });
    if (!existingGroup) {
      return res.status(404).send("Group ID not found");
    }
    // Define an object to hold the update operation
    const updateOperation = {
      $push: {
        username: username // Append the new username to the usernames array
      }
    };
    // Find the group by groupID and update their information
    const updatedGroup = await Group.findOneAndUpdate(
      { groupID: groupID }, // Find group by groupID
      updateOperation, // Update with the new fields
      { new: true, upsert: true } // To return the updated document and create a new one if not found
    );

    res.send(updatedGroup); // Send the updated group object in response
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error"); // Handle internal server error
  }
});

//updateUser posts
APIrouter.put("/updateUserPost/:username", (req, res) => {
  const username = req.params.username; // Extract username from URL parameters
  const post = req.body.post; // Extract updated post information from request body
  // Define an object to hold the update operation
  const updateOperation = {
    $push: {
      posts: post // Append the new post object to the posts array
    }
  };
  // Find the user by username and update their information
  User.findOneAndUpdate(
    { username: username }, // Find user by username
    updateOperation, // Update with the new fields
    { new: true, upsert: true } // To return the updated document and create a new one if not found
  )
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).send("User not found");
      }
      res.send(updatedUser); // Send the updated user object in response
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error"); // Handle internal server error
    });
});

//create user with Google login
APIrouter.post("/post/byGoogle", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    google_data: req.body.google_data,
  });

  newUser
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

//Add Google data to user by username
APIrouter.post("/connectGoogle/:username", (req, res) => {
  const googleData = req.body.googleData;

  User.findOneAndUpdate(
    { username: req.params.username },
    {
      $set: {
        google_data: googleData,
      },
    },
    { returnOriginal: false }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

export { APIrouter };
