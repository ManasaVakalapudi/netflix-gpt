import React, {useState} from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleSignUpForm=()=>{
    setIsSignUp(!isSignUp);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="login background" src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg" />
      </div>
      <form className="absolute z-50 w-1/4 mx-auto bg-black bg-opacity-85 my-40 p-12 right-0 left-0 text-white">
      <h1 className="font-bold text-2xl py-4 text-center">{isSignUp ? "Sign Up" : "Sign In"}</h1>
        {isSignUp && <input type="text" placeholder="Full Name" className="p-2 my-4 border border-gray-300 rounded w-full" />}
        <input type="email" placeholder="Email" className="p-2 my-4 border border-gray-300 rounded w-full" />
        {isSignUp && <input type="text" placeholder="Mobile Number" className="p-2 my-4 border border-gray-300 rounded w-full" />}
        <input type="password" placeholder="Password" className="p-2 my-4 border border-gray-300 rounded w-full" /><br />
        <button type="submit" className="p-2 my-4 bg-red-600 text-white rounded w-full">{isSignUp ? "Sign Up" : "Sign In"}</button>
        <p className="my-4 cursor-pointer" onClick={toggleSignUpForm}>{isSignUp ? "Already have an account? Sign In" : "New to Netflix? You can Sign up now"}</p>
      </form>
    </div>
  );
};

export default Login;
