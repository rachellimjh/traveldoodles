import React, { useState } from 'react';
import "../routes/css/LoginPage.css";
import LoginImage from "../../public/images/login.jpg"
import newImage from "../../public/images/new.png"
import LoginBar from "../../src/components/LoginBar"
import { useAuth } from "../hooks/AuthProvider";
import DatabaseService from "../api/databaseService";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleAPIService from "../api/googleAPIService";
import { useNavigate, Link} from 'react-router-dom';
import travel from "../../public/images/travel.png";

export default function LoginPage() {
  const [userInput, setUserInput] = useState({
      username: "",
      password: "",
      groupID: [],
      posts: []
  });
  const [data, setData] = useState([]);
  const { user, logout, login} = useAuth();
  const navigate = useNavigate();

  const handleLogin = () =>{
    login({name:"test"})
  }

  const handleSignup = async () => {
      try {
          login({ name: userInput.username });

          const newData = [...data, userInput];
          setData(newData);

          const response = await DatabaseService.addUser(userInput);
          console.log("User added:", response.data);

          const response2 = await DatabaseService.getUser(); 
          setUserInput(response2.data);

          console.log("Signup successful");

          navigate('/Home'); // Use navigate function to redirect to the Home page

      } catch(e) {
          console.log("Signup error:", e);
      }
  };

  const googleLogin = useGoogleLogin({
      onSuccess: async (tokenResponse) => {
          try {
              const response = await GoogleAPIService.getGoogleData(tokenResponse);
              console.log(response);

              const name = response.data.name;

              login({ name });

              const defaultPassword = "defaultPassword";

              const response2 = await DatabaseService.addUser({ username: name, password: defaultPassword });
              console.log("User added:", response2.data);

              setData([...data, name]);

              const response3 = await DatabaseService.getUser();
              setUserInput(response3.data);

              navigate('/Home');

          } catch (e) {
              console.log("Error:", e);
          }
      },
      onError: () => {
          console.log("Error occurred during Google login");
      },
  });

  return(
    //D7E5CA
    <div className="half-image-container" style={{ backgroundColor: '#F9F3CC' }}>
      <div className="nav">
        <LoginBar/>
      </div> 
      
      
    
      <div className="image-container">
        <img src={LoginImage} alt="Image" />
      </div>
      <div className="other-half">
        <div className="text-content">
        <h3>CREATE AN ACCOUNT</h3>
        <p>enter your email below to create an account</p>
        </div>

        <div className="inputs">
          <div className="email-wrapper">
          <label className="email-field" htmlFor="email"></label>
          <input
            type="email"
            id="email"
            value={userInput.username}
            onChange={(event) => setUserInput({...userInput, username: event.target.value})}
            placeholder="name@example"
          />
          </div>
        
          <div className="password-wrapper">
          <label className="password-field" htmlFor="password"> </label>
               <input className="password-box"
                type="password"
                id="password"
                value={userInput.password}
                onChange={(event) => setUserInput({...userInput, password: event.target.value})}
                placeholder="password"
               />
          </div>
        
        <button onClick={handleSignup} className="email-btn">
          sign in with email
        </button>
        <p className="contwith"> or continue with </p>
        <button className="gmail-btn" onClick={googleLogin}>
          Gmail
        </button>
        
        </div>
        
      </div>
  
</div>
  );

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
