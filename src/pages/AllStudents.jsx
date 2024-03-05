import React, { useEffect, useState } from "react";
import { UserState } from "../context/UserProvider";
import Loader from "../components/Loader";
import "../styles/AllStudents.scss";
import Header from "../components/Header";
import StudentCard from "../components/StudentCard";
import { FaFilter } from "react-icons/fa";

const AllStudents = () => {
  const { loading, allStudents, filterData, setFilterData } = UserState();
  const [branchValue, setBranchvalue] = useState('all')
  const [semValue, setSemvalue] = useState('all')

  useEffect(() => {
    setDatasets();
  }, []);

  const setDatasets = () => {
    setFilterData(allStudents);
  };

  const branchHandler = (data) => {
    setBranchvalue(data)
    if (data === "all") {
      setFilterData(allStudents);
      return;
    }
    let seData = [];
    for (let i = 0; i < allStudents.length; i++) {
      if (allStudents[i].branch === data) {
        seData.push(allStudents[i]);
      }
    }
    setFilterData(seData);
  };

  const semHandler = (data) => {
    setSemvalue(data)
    if (data === "all") {
      setFilterData(allStudents);
      return;
    }
    let seData = [];
    for (let i = 0; i < filterData.length; i++) {
      if (filterData[i].sem === data) {
        seData.push(filterData[i]);
      }
    }
    setFilterData(seData);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="filter">
            <div>
              Filters: <FaFilter size={25} />
            </div>
            <div>
              <span>Branch : </span>
              <input type="text" value={branchValue} readOnly />
              <div>
                <p onClick={() => branchHandler("all")}>All</p>
                <p onClick={() => branchHandler("computer science")}>
                  computer science
                </p>
                <p onClick={() => branchHandler("civil")}>civil</p>
                <p onClick={() => branchHandler("Electrical")}>Electrical</p>
                <p onClick={() => branchHandler("Mechnical")}>Mechnical</p>
                <p onClick={() => branchHandler("Electronics")}>Electronics</p>
              </div>
            </div>
            <div>
              <span>Semester :</span>
              <input type="text" value={semValue} readOnly />
              <div>
                <p onClick={() => semHandler("all")}>All</p>
                <p onClick={() => semHandler("6th")}>6th</p>
                <p onClick={() => semHandler("5th")}>5th</p>
                <p onClick={() => semHandler("4th")}>4th</p>
                <p onClick={() => semHandler("3rd")}>3rd</p>
                <p onClick={() => semHandler("2nd")}>2nd</p>
                <p onClick={() => semHandler("1st")}>1st</p>
              </div>
            </div>
          </div>
          <div className="allStudents">
            {console.log(filterData)}
            {filterData?.map((item, index) => (
              <StudentCard key={index} item={item} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AllStudents;
