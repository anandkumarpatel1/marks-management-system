import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [chn, setChn] = useState(false);
  const [search, setSearch] = useState();
  const [semStudent, setSemStudent] = useState();
  const [stuProfile, setStuProfile] = useState();
  const [allStudents, setAllStudents] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [chn]);

  const fetchUser = async () => {
    if (document.cookie) {
      setLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        "https://marks-management-system-backend.vercel.app/api/v1/teacher/me",
        config
      );

      setUser(data?.teacher);
      navigate("/");
      toast(data?.message);
      setLoading(false);
    } else {
      navigate("/login");
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        chn,
        setChn,
        loading,
        setLoading,
        search,
        setSearch,
        semStudent,
        setSemStudent,
        stuProfile,
        setStuProfile,
        allStudents,
        setAllStudents,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => {
  return useContext(UserContext);
};
