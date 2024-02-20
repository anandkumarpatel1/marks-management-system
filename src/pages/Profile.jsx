import React from "react";
import Header from "../components/Header";
import "../styles/Profile.scss";
import { UserState } from "../context/UserProvider";

const Profile = () => {

  const {user} = UserState()
  return (
    <>
    <Header />
      <div className="profile">
        <div>
          <img src={user?.pic} alt={user?.name} />
        </div>
        <div>
          
          
        </div>
      </div>
    </>
  );
};

export default Profile;
