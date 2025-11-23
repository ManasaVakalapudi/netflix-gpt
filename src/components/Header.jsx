import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
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
  return (
    <div className="absolute bg-gradient-to-b from-black to-transparent p-4 z-50 w-full flex justify-between items-center">
      <img
        className="w-50 h-20"
        alt="Netflix logo"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user.displayName && (
        <div className="flex gap-4">
          <img
            alt="user-icon"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
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
