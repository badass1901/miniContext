import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user,setUser } = useContext(UserContext);
  const handleLogout = () => {
    //useEffect
    
    setUser(null);
    
  }
  return !user ? (
    <h3>Please Login</h3>
  ) : (
    <>
      <div>Welcome Profile</div>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
