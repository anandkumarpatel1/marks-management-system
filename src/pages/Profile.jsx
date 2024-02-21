import React from "react";
import Header from "../components/Header";
import "../styles/Profile.scss";
import { UserState } from "../context/UserProvider";

const Profile = () => {
  const { user } = UserState();
  return (
    <>
      <div className="profile">
        <div>
          <img src={user?.pic} alt={user?.name} />
        </div>
        <div>
          <div>
            <p>Name</p>
            <p>Email</p>
            <p>ID</p>
            <p>Total Students</p>
          </div>
          <div>
            <p>: {user?.name}</p>
            <p>: {user?.email}</p>
            <p>: {user?._id}</p>
            <p>: {user?.students.length}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
