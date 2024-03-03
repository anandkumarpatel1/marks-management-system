import React, { useEffect } from "react";

import Loader from "../components/Loader";
import { UserState } from "../context/UserProvider";
import "../styles/Home.scss";
import RightHomeBar from "../components/RightHomeBar";
import MainHome from "../components/MainHome";
import Header from "../components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const { loading, setLoading } = UserState();

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
        <ToastContainer autoClose={5000}/>
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
