import React, { useEffect, useState } from "react";
import "../styles/Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserState } from "../context/UserProvider";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate()
  const { chn, setChn, setUser, loading, setLoading } = UserState();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        toast("Please all details");
        return;
      }

      setLoading(true);

      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.post(
        "https://marks-management-system-backend.vercel.app/api/v1/teacher/login",
        { email, password },
        config
      );

      if (data) {
        document.cookie = `token=${data?.token}`;
        setUser(data?.teacher);
        setChn(!chn);
      }

      setLoading(false);
      return;
    } catch (error) {
      alert(error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer autoClose={5000} />
          <div className="login">
            <form onSubmit={(e) => loginHandler(e)}>
              <p>Login</p>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <button>submit</button>
              <p>
                create account? <span onClick={() => navigate('/signup')}>signup</span>
              </p>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
