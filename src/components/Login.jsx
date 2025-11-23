import React, { useState, useRef } from "react";
import Header from "./Header";
import validateData from "../utils/validate.js";
import { auth } from "../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [validateMessage, setValidateMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const openEyeIcon =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbYrpuP5oTHQXP5dHsn2Oym_cW-yjwdr4wQ&s";
  const closeEyeIcon =
    "https://cdn3.iconfinder.com/data/icons/show-and-hide-password/100/show_hide_password-10-512.png";
  const [eyeIcon, setEyeIcon] = useState(openEyeIcon);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignUpForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    const checkMessage = validateData(
      email.current.value,
      password.current.value
    );
    setValidateMessage(checkMessage);
    if (checkMessage.valid) {
      if (isSignUp) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("User signed up:", user);
            updateProfile(user, {
              displayName: name.current.value,
            }).then(() => {
              navigate("/browse");
            });
            setValidateMessage({
              valid: true,
              message: "User signed up successfully!",
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing up:", errorCode, errorMessage);
            setValidateMessage({ valid: false, message: errorMessage });
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User signed in:", user);
            setValidateMessage({
              valid: true,
              message: "User signed in successfully!",
            });
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setValidateMessage({ valid: false, message: errorMessage });
          });
      }

      console.log(checkMessage);
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setEyeIcon(showPassword ? openEyeIcon : closeEyeIcon);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="login background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
        />
      </div>
      <form
        className="absolute z-50 w-1/4 mx-auto bg-black bg-opacity-85 my-40 p-12 right-0 left-0 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-2xl py-4 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 border border-gray-300 rounded w-full text-black"
            ref={name}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          ref={email}
          className="p-2 my-4 border border-gray-300 rounded w-full text-black"
        />
        {isSignUp && (
          <input
            type="text"
            placeholder="Mobile Number"
            className="p-2 my-4 border border-gray-300 rounded w-full text-black"
          />
        )}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            ref={password}
            className="p-2 pr-10 my-4 border border-gray-300 rounded w-full text-black"
          />
          <button
            onClick={handlePasswordVisibility}
            className="absolute inset-y-0 right-0 z-40 cursor-pointer p-2"
          >
            <img src={eyeIcon} alt="eye icon" className="w-6 h-6 bg-white" />
          </button>
        </div>
        <button
          type="submit"
          className="p-2 my-4 bg-red-600 text-white rounded w-full text-black"
          onClick={handleSubmit}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p
          className={validateMessage.valid ? "text-green-500" : "text-red-500"}
        >
          {validateMessage.message}
        </p>
        <p className="my-4 cursor-pointer" onClick={toggleSignUpForm}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "New to Netflix? You can Sign up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
