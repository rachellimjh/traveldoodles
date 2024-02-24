import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage.js";

//create a context on global scope
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigation = useNavigate();

  //placeholder function to authenticate user
  const login = async (data) => {
    setUser(data);
    navigation("/Home");
  };

  //placeholder function to sign out user
  const logout = () => {
    setUser(null);
    navigation("/", { replace: true });
  };

//   //Login with Google
//   const googleAuthLogin = async (data) => {
//     //check if user exist
//     const response = await APIDataService.getByGmail(data.email);
//     setUser(response.data);
//         navigation("/Home");

//     //If user does not exist, create new user, check for gmail first
//     // if (response.data === "Null") {
//     //   // then check for email
//     //   const secondResponse = await APIDataService.getByEmail(data.email);
//     //   if (secondResponse.data === "Null") {
//     //     const userData = {
//     //       username: uniqueNamesGenerator({
//     //         dictionaries: [colors, adjectives, animals],
//     //         separator: "-",
//     //       }),
//     //       email: data.email,
//     //       password: userDataGenerator.getRandomPassword(),
//     //       google_data: data,
//     //     };
//     //     const createResponse = await APIDataService.createByGoogle(userData);
//     //     setUser(createResponse.data);
//     //     navigation("/user");
//     //   } else {
//     //     setUser(secondResponse.data);
//     //     navigation("/user");
//     //   }
//     // } else {
//     //   //If user exist, just log in
//     //   setUser(response.data);
//     //   navigation("/user");
//     // }
//   };

//   //Connect with Google
// //   const googleConnect = async (data) => {
// //     const newData = {
// //       email: user.email,
// //       googleData: data,
// //     };
// //     const response = await APIDataService.connectToGoogle(newData);
// //     setUser(response.data);
// //   };

  //useMemo to improve performance
  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//wrap useContext in useAuth as a custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};