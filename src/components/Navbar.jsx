import React from "react";
import { auth } from "../firebase";
import SignIn from "./SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOut from "./LogOut";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-8`,
  heading: `text-white text-3xl`,
  user: `text-white text-xl`,
  user_img: `rounded-full h-[76px] w-[76px] p-[10px] m-0`
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>

      {user ? (
        <>
          <h1 className={style.user}>Welcome {user.displayName}</h1>
          <img className={style.user_img} alt='' src={user.photoURL}></img>
          <LogOut />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Navbar;
