import React from "react";
import { UserState } from "../context/UserProvider";
import Loader from "../components/Loader";
import "../styles/AllStudents.scss";
import Header from "../components/Header";
import StudentCard from "../components/StudentCard";

const AllStudents = () => {
  const { loading, allStudents } = UserState();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="allStudents">
            {allStudents?.map((item, index) => (
              <StudentCard key={index} item={item} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AllStudents;
