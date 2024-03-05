import React, { useState } from "react";
import "../styles/Home.scss";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { UserState } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import SideStudentCard from "./SideStudentCard";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainHome = () => {
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentRegNo, setNewStudentRegNo] = useState("");
  const [newStudentRollNo, setNewStudentRollNo] = useState("");
  const [newStudentBranch, setNewStudentBranch] = useState("");
  const [newStudentSem, setNewStudentSem] = useState("");
  const [newStudentPass, setNewStudentPass] = useState("");
  const [searchInput, setsearchInput] = useState("");
  const [searchList, setSearchList] = useState(false);
  const [searchLoad, setSearchLoad] = useState(false);
  const navigate = useNavigate();
  const { search, setSearch, setLoading, setSemStudent, setAllStudents, setFilterData } =
    UserState();

  const studentCreateHandler = async () => {
    try {
      if (
        !newStudentName ||
        !newStudentRollNo ||
        !newStudentRegNo ||
        !newStudentBranch ||
        !newStudentPass ||
        !setNewStudentSem
      ) {
        toast("Please provide all detalis");
        return;
      }
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
        const { data } = await axios.post(
          "https://marks-management-system-backend.vercel.app/api/v1/teacher/new/student",
          {
            name: newStudentName,
            rollNo: newStudentRollNo,
            regNo: newStudentRegNo,
            branch: newStudentBranch,
            sem: newStudentSem,
            password: newStudentPass,
          },
          config
        );
        setLoading(false);
        toast(data?.message);
      } else {
        navigate("/login");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message);
    }
  };

  const allStudentHandler = async () =>{
    try {
      setLoading(true)
      navigate('/allstudents')
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };
  
      const { data } = await axios.get(
        `https://marks-management-system-backend.vercel.app/api/v1/teacher/findall`,
        config
      );

      if(data){
        console.log(data)
        setAllStudents(data?.student)
        setFilterData(data?.student)
        setLoading(false)
      }
    } catch (error) {
      toast(error)
      setLoading(false)
    }

  }
  const searchHandler = async (e) => {
    try {
      e.preventDefault();
      setSearchLoad(true);
      if (!searchInput) {
        toast("Enter Name or something");
        return;
      }
      if (document.cookie) {
        setSearchList(true);
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${document.cookie.split("=")[1]}`,
          },
          withCredentials: true,
          sameSite: "None",
        };

        const { data } = await axios.get(
          `https://marks-management-system-backend.vercel.app/api/v1/teacher/search/${searchInput}`,
          config
        );

        if (data?.student) {
          setSearch(data?.student);
        }
        setSearchLoad(false);
      } else {
        navigate("/login");
        setSearchLoad(false);
      }
    } catch (error) {
      setSearchLoad(false);
      toast(error);
    }
  };

  function crosshandler() {
    setSearchList(false);
  }

  const semhandler = async (sem) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };
  
      const { data } = await axios.get(
        `https://marks-management-system-backend.vercel.app/api/v1/teacher/search/${sem}`,
        config
      );
  
      setSemStudent(data?.student);
      navigate("/students/semester");
    } catch (error) {
      toast(error)
    }
    
  };
  return (
    <div className="mainHome">
      {/* search bar */}
      <form onSubmit={(e) => searchHandler(e)}>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
        />
        <button>
          <CiSearch size={25} />
        </button>
      </form>
      <div className={`searchedStudent ${searchList ? "active" : ""}`}>
        <div>
          <RxCross2 size={45} onClick={crosshandler} />
        </div>
        {searchLoad && <div>Please wait...</div>}
        {search && search.map((item, index) => <SideStudentCard key={index}  item={item} />)}
      </div>
      <div className="input">
        {/* first div */}
        <div>
          <p>Add New Student</p>
          <input
            type="text"
            value={newStudentName}
            placeholder="Name"
            onChange={(e) => setNewStudentName(e.target.value)}
          />
          <input
            type="text"
            value={newStudentRollNo}
            placeholder="Roll No"
            onChange={(e) => setNewStudentRollNo(e.target.value)}
          />
          <input
            type="text"
            value={newStudentRegNo}
            placeholder="Registration No"
            onChange={(e) => setNewStudentRegNo(e.target.value)}
          />
          <input
            type="text"
            value={newStudentBranch}
            placeholder="Branch eg: Electrical"
            onChange={(e) => setNewStudentBranch(e.target.value)}
          />
          <input
            type="text"
            value={newStudentSem}
            placeholder="Semester eg: 6th"
            onChange={(e) => setNewStudentSem(e.target.value)}
          />
          <input
            type="password"
            value={newStudentPass}
            placeholder="Password"
            onChange={(e) => setNewStudentPass(e.target.value)}
          />
          <button onClick={studentCreateHandler}>Create</button>
        </div>
        {/* second div */}
        <div>
          <button onClick={allStudentHandler}>Fetch All Students</button>
          <button>Fetch All Enroll Students</button>
        </div>
        {/* third div */}
        <div>
          <button onClick={() => semhandler('6th')}>Fetch 6th sem Students</button>
          <button onClick={() => semhandler('5th')}>Fetch 5th sem Students</button>
          <button onClick={() => semhandler('4th')}>Fetch 4th sem Students</button>
          <button onClick={() => semhandler('3rd')}>Fetch 3rd sem Students</button>
          <button onClick={() => semhandler('2nd')}>Fetch 2nd sem Students</button>
          <button onClick={() => semhandler('1st')}>Fetch 1st sem Students</button>
        </div>
        {/* fourth div */}
        <div>
          <button onClick={() => semhandler('Computer')}>Fetch CSE Students</button>
          <button onClick={() => semhandler('Electrical')}>Fetch EE Students</button>
          <button onClick={() => semhandler('Electronics')}>Fetch EEE Students</button>
          <button onClick={() => semhandler('Mechnical')}>Fetch ME Students</button>
          <button onClick={() => semhandler('Civil')}>Fetch Civil Students</button>
          <button onClick={() => semhandler('Information')}>Fetch IS Students</button>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
