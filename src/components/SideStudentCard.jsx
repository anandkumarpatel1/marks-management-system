import React from "react";
import "../styles/Home.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserState } from "../context/UserProvider";

const SideStudentCard = ({ item }) => {
  const { setStuProfile, setLoading } = UserState();
  const navigate = useNavigate();

  const cardHandler = async () => {
    try {
      setLoading(true);
      navigate(`/student/${item?._id}`);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        `https://marks-management-system-backend.vercel.app/api/v1/teacher/student/${item?._id}`,
        config
      );

      if (data) {
        setStuProfile(data?.student);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };
  return (
    <div className="sideStudentCard" onClick={cardHandler}>
      <img
        src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=996&t=st=1705728530~exp=1705729130~hmac=d771074940f83a359b8c37b6b0bec981aa5950b6cf04604ac5ac226c84ab5dff"
        alt="name"
      />
      <div>
        <p>{item?.name}</p>
        <p>{item?.rollNo}</p>
      </div>
    </div>
  );
};

export default SideStudentCard;
