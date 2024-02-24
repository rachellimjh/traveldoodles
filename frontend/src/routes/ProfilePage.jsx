
import React, { useState } from 'react';
import NavBar from "../components/NavBar"
import "../routes/css/ProfilePage.css";
import userImage from "../../public/images/user.png"
import arrowImage from "../../public/images/arrow.png"

export default function ProfilePage()  {

    const [groupID, setGroup] = useState('');

    const handleGroup = (event)=>{
        setGroup(event.target.value);
    }


    return(
        // <h1>Hello world</h1>
        <>
            <NavBar />
            <div className="profile-wrapper">
                <div className="profile-icon">
                    <img src={userImage} alt="user-icon"/>
                </div>
                <p className="username">USERNAME</p>
                <div className="group-input">
                    <input 
                        type ="groupID"
                        id="groupID"
                        value={groupID}
                        onChange={handleGroup}
                        placeholder="enter group id to join group"
                    />
                    <button className="arrow-btn">
                        <img src={arrowImage} alt="arrow-icon"/>
                    </button>
                </div>

            </div>
            

           

        </>
        




    )

}