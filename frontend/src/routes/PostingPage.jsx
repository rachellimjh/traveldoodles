import React from "react";
import { useState } from "react";
import "./PostingPage.css";

export default function PostingPage() {
  const [post, setPost] = useState({
    title: "",
    description: "",
    author: "",
    image: "",
    date: "",
    location: "",
    type: "",
  });

  const handleTitle = (event) => {
    setPost({ ...post, title: event.target.value });
  };
  const handleLocation = (event) => {
    setPost({ ...post, location: event.target.value });
  };
  const handleDate = (event) => {
    setPost({ ...post, date: event.target.value });
  };
  const handleDescription = (event) => {
    setPost({ ...post, description: event.target.value });
  };
  const handlePost = async () => {
    // setData([...data, post])
    // console.log(post)
    // try {
    //   const response = await DatabaseService.addPost(post);
    //   const response2 = await DatabaseService.getPost();
    //   setData(response2.data);
    // } catch (e) {
    //   console.log(e);
    // }
    // //console.log(response.data)
  };

  const handleCancel = (event) => {
    //go back to previous page
  };
  return (
    <div className="grid-container">
      <div className="left-grid">
        <input
          className="title-box"
          onChange={handleTitle}
          placeholder="Title"
        />
        {/* <img src="path/to/your/image.jpg" alt="Description of the image"></img> */}
        {/* <>imageFromDesktop</> */}
      </div>
      <div className="right-grid">
        <select name="tag" id="tag">
          <option value="" disabled selected hidden>
            Tag
          </option>
          <option value="truffleDoodles">TruffleDoodles</option>
          <option value="jungleDoodles">JungleDoodles</option>
          <option value="totoroDoodles">TotoroDoodles</option>
          <option value="snoozerDoodles">SnoozerDoodles</option>
          <option value="wonderDoodles">WonderDoodles</option>
          <option value="studyDoodles">StudyDoodles</option>
          <option value="fitDoodles">FitDoodles</option>
        </select>

        <input
          className="location-box"
          onChange={handleLocation}
          placeholder="Location"
        />

        <input className="date-box" onChange={handleDate} placeholder="Date" />

        <input
          className="description-box"
          onChange={handleDescription}
          placeholder="Description"
        />

        <div className="buttons">
          <button className="upload-button" onClick={handlePost}>
            Upload
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
