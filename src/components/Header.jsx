import React, { useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { NETFLIX_LOGO_URL } from "../utils/constants.js";
import { DEFAULT_USER_ICON_URL } from "../utils/constants.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error", error);
        navigate("/error");
      });
  };
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        console.log("user", user);
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute bg-gradient-to-b from-black to-transparent p-4 z-50 w-full flex justify-between items-center">
      <img
        className="w-50 h-20"
        alt="Netflix logo"
        src={NETFLIX_LOGO_URL}
      />
      {user.displayName && (
        <div className="flex gap-4">
          <img
            alt="user-icon"
            src={DEFAULT_USER_ICON_URL}
            className="w-8 h-8"
          />
          <button onClick={handleSignOut} className="text-white">
            {user.displayName} Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
