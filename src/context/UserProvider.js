import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [chn, setChn] = useState(false);
  const [search, setSearch] = useState();
  const [semStudent, setSemStudent] = useState()

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

      console.log(data);
      setUser(data?.teacher);
      navigate("/");
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
        setSemStudent
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => {
  return useContext(UserContext);
};
