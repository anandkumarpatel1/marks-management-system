import React from "react";

import Loader from "../components/Loader";
import { UserState } from "../context/UserProvider";
import "../styles/Home.scss";
import RightHomeBar from "../components/RightHomeBar";
import MainHome from "../components/MainHome";
import Header from "../components/Header";

const Home = () => {
  const { loading, setLoading } = UserState();


  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
        <Header />
          <div className="home">
            <MainHome />
            <RightHomeBar />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
