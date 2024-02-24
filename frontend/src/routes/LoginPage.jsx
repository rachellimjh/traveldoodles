
import React, { useState } from 'react';
import "../routes/css/LoginPage.css";
import LoginImage from "../../public/images/login.jpg"
import newImage from "../../public/images/new.png"
import NavBar from "../components/NavBar.jsx"


export default function LoginPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = (event) => {
    setEmail(event.target.value);
  }
  
  const handleLogin = (event) => {
    setPassword(event.target.value);
  }

  return(

    <div className="half-image-container">
      <div className="nav">
        <NavBar />
      </div>
    
      <div className="image-container">
        <img src={LoginImage} alt="Image" />
      </div>
      <div className="other-half">
        <div className="text-content">
        <h3>CERATE AN ACCOUNT</h3>
        <p>enter your email below to create an account</p>
        </div>

        <div className="inputs">
          <div className="email-wrapper">
          <label className="email-field" htmlFor="email"></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="name@example"
          />
          </div>
        
          <div className="password-wrapper">
          <label className="password-field" htmlFor="password"> </label>
               <input className="password-box"
                type="password"
                id="password"
                value={password}
                onChange={handleLogin}
                placeholder="password"
               />
          </div>
        
        <button className="email-btn">
          sign in with email
        </button>
        <p className="contwith"> or continue with </p>
        <button className="gmail-btn">
          Gmail
        </button>
        
        </div>
        
      </div>
  
</div>
  )

}












// export default function LoginPage() {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const handleChange = (event) => {
//     setEmail(event.target.value);
//   }
  
//   const handleLogin = (event) => {
//     setPassword(event.target.value);
//   }


//   return (
//     <>
//     <div className="navbar-wrapper">
//       <NavBar />
//     </div>
    
//     <div className="outside-grid">
    
//       <div className="test">
//         <img src={LoginImage} alt="Login" />
//       </div>
     

//     <div className="outer-grid">
//       <div className="loginWrapper">
//         <h3 className="create">CREATE AN ACCOUNT</h3>
//         <p className="enter-email">enter your email below to create an account</p>
        
//         <div>
          
//             <div className="email-input">
//               <label className="email-field" htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={handleChange}
//                 placeholder="name@example"
//               />
              
//               <div className="password-wrapper">
//               <label className="password-field" htmlFor="password"> Password: </label>
//               <input className="password-box"
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={handleLogin}
//                 placeholder="password"
//               />  
//               </div>
              

//               <div>

//               </div>
//               {/* Display an error message if email is invalid
//               {!email.includes('@') && <p>Please enter a valid email address</p>} */}
//             </div>
          
//        </div>
//        <button className="signin-btn">
//             sign in with email
//             </button>
//         <div className="gmailbutton-wrapper">
//         <p>or continue with</p>
//           <button className="gmail-button">
//           <div className="gmail">
//             <img src={newImage} alt="gamil-icon" />
//           </div>
//             sign in with gmail
//           </button>

//         </div>
          
      
//       </div>
//     </div>

    

//     </div>
//     </>
    
    
    
//   );
// }
