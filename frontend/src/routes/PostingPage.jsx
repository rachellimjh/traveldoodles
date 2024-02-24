import React from "react";
import { useState } from "react";
import "./css/PostingPage.css";
import { FileUploader } from "react-drag-drop-files";
import NavBar from "../components/NavBar";
import { Base64 } from "js-base64";

export default function PostingPage() {
  const [data, setData] = useState([]);
  const [post, setPost] = useState({
    title: "",
    description: "",
    author: "",
    image: "",
    date: "",
    location: "",
    type: "",
  });
  const fileTypes = ["JPG", "PNG", "GIF"];

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setPost({ ...post, image: reader.result });
      //console.log("check", post.image, "empty");
    };
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  }

  // function uploadImage(){
  //   fetch("",{
  //     method: "POST",
  //     crossDomain: true,
  //     headeres:{
  //       "Content-Type": "application/json"
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },

  //   })
  // }

  //component to upload photos
  // const DragDrop = (event) => {
  //   const handleChange = (file) => {
  //     onChange{convertToBase64};
  //     const url = URL.createObjectURL(file);
  //     console.log("URL", image);
  //     setPost({ ...post, image: url });
  //     //setFile(url);
  //     console.log(file);
  //   };
  //   return (
  //     <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  //   );
  // };

  //   const handleImage = (event) => {
  //     setPost({ ...post, image: event.target.image });
  //     console.log(event.target.image);
  //   };
  const handleTitle = (event) => {
    setPost({ ...post, title: event.target.value });
    //console.log("Title changed:", event.target.value);
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
    setData([...data, post]);
    console.log(post);
    try {
      const response = await DatabaseService.addPost(post);
      const response2 = await DatabaseService.getPost();
      setData(response2.data);
    } catch (e) {
      console.log(e);
    }
    //console.log(response.data)
  };

  const handleCancel = (event) => {
    //go back to previous page
  };

  return (
    <>
      <div className="out-nav-bar">
        <NavBar className="nav-bar" />
      </div>
      <div className="grid-container">
        <div className="left-grid">
          <input
            className="title-box"
            onChange={handleTitle}
            placeholder="Title"
          />
          {/* <DragDrop className="dragdrop-box" />
          <img alt="not found" width={"100px"} src={post.image} /> */}
          <div className="auth-wrapper">
            <div className="auth-inner" style={{ width: "auto" }}>
              Upload Image
              <input accepts="image/*" type="file" onChange={convertToBase64} />
              <img width={100} height={100} src={post.image} />
            </div>
          </div>
        </div>
        <div className="right-grid">
          <select name="tag" id="tag" defaultValue="" required>
            <option value="" disabled hidden>
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

          <input
            className="date-box"
            onChange={handleDate}
            placeholder="Date"
          />

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
    </>
  );
}
