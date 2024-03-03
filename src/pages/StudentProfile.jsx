import React from "react";
import { UserState } from "../context/UserProvider";
import Loader from "../components/Loader";
import Header from "../components/Header";
import "../styles/StudentProfile.scss";

const StudentProfile = () => {
  const { stuProfile, loading } = UserState();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />

          <div className="studentProfile">
            <div>
              <div>
                <img src={stuProfile?.pic} alt={stuProfile?.name} />
              </div>

              <div>
                <div>
                  <p>Name</p>
                  <p>Branch</p>
                  <p>Registration No</p>
                  <p>Roll No</p>
                  <p>Semester</p>
                </div>
                <div>
                  <p>: {stuProfile?.name}</p>
                  <p>: {stuProfile?.branch}</p>
                  <p>: {stuProfile?.regNo}</p>
                  <p>: {stuProfile?.rollNo}</p>
                  <p>: {stuProfile?.sem}</p>
                </div>
              </div>
            </div>

            <div>
              {stuProfile?.result?.map((item, index) => (
                <div key={index}>
                  <div>
                    <h4>Test No</h4>
                    <p>Number</p>
                    <p>Subject</p>
                    <p>Teacher Id</p>
                  </div>
                  <div>
                    <h4>: {item?.testNo}</h4>
                    <p>: {item?.number}</p>
                    <p>: {item?.subject}</p>
                    <p>: {item?.teacher}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StudentProfile;
