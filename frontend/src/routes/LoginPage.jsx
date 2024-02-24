// "use client"

// import * as React from "react"
// import { cn } from "../lib/utils"
// import { Icons } from "../components/icons"
// import { Button } from "../registry/new-york/ui/button"
// import { Input } from "../registry/new-york/ui/input"
// import { Label } from "../registry/new-york/ui/label"
// import "../routes/css/LoginPage.css"

// export default function LoginPage({ className, ...props }) {
//   const [isLoading, setIsLoading] = React.useState(false)

//   async function onSubmit(event) {
//     event.preventDefault()
//     setIsLoading(true)

//     setTimeout(() => {
//       setIsLoading(false)
//     }, 3000)
//   }

//   return (
//     <div className={cn("gridGap", className)} {...props}>
//       <form onSubmit={onSubmit}>
//         {/* <div className="grid1"> */}
//           <div className="grid">
//             <Label className="sr-only" htmlFor="email">
//               Email
//             </Label>
//             <Input
//               id="email"
//               placeholder="name@example.com"
//               type="email"
//               autoCapitalize="none"
//               autoComplete="email"
//               autoCorrect="off"
//               disabled={isLoading}
//             />
//           </div>
//           <Button className="customButton" disabled={isLoading}>
//             {isLoading && (
//               <Icons.spinner className="spinnerIcon" />
//             )}
//             Sign In with Email
//           </Button>
//         {/* </div> */}
//       </form>
//       {/* <div className="relative"> */}
//         {/* <div className="absolute inset-0 flex items-center"> */}
//           <span className="w-full border-t" />
//         {/* </div> */}
//         {/* <div className="cntWith"> */}
//           <span className="cntWithCont">
//             Or continue with
//           </span>
//         {/* </div> */}
//       {/* </div> */}
//       <Button className="gmailBtn"variant="outline" type="button" disabled={isLoading}>
//         {isLoading ? (
//           <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//         ) : (
//           <Icons.google className="googleIcon" />
//         )}{" "}
//         Gmail
//       </Button>
//     </div>
//   )
// }
import React, { useState } from "react";

// function EmailInput() {
//   const [email, setEmail] = useState('');
//   const handleChange = (event) => {
//     setEmail(event.target.value);
//   };

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="outside-grid">
      <div>
        <h1>test</h1>
      </div>
      <div className="outer-grid">
        <div className="loginWrapper">
          <h2>CREATE AN ACCOUNT</h2>
          <p>Enter your email below to create an account</p>

          <div>
            <button>sign in with email</button>
            <div className="emailInput">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {/* Display an error message if email is invalid
              {!email.includes('@') && <p>Please enter a valid email address</p>} */}
            </div>
          </div>

          <p>or continue with</p>
          <button>Gmail</button>
        </div>
      </div>
    </div>
  );
}
