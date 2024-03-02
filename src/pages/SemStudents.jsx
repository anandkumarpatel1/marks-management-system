import React, { useState } from "react";
import "../styles/SemStudents.scss";
import { UserState } from "../context/UserProvider";
import axios from "axios";
import AddMarksCard from "../components/AddMarksCard";
import Header from "../components/Header";

const SemStudents = () => {
  const { semStudent, setSemStudent } = UserState();
  const [testNo, setTestNo] = useState("");
  const [sub, setSub] = useState("");

  return (
    <>
      <Header />
      <div className="semStudents">
        <div>
          <p>Enter the details for adding marks: </p>
          <input
            type="text"
            placeholder="Enter Test No"
            value={testNo}
            onChange={(e) => setTestNo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Test Sub"
            value={sub}
            onChange={(e) => setSub(e.target.value)}
          />
        </div>
        <div>
          {semStudent &&
            semStudent?.map((item, index) => (
              <AddMarksCard key={index} item={item} sub={sub} testNo={testNo} />
            ))}
        </div>
      </div>
    </>
  );
};

export default SemStudents;
