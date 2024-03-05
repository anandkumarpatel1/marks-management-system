import React from "react";
import "../styles/StudetnCard.scss";

const StudentCard = ({ item }) => {
  return (
    <div className="studentCard">
      <div>
        <img src={item?.pic} alt={item?.name} />
      </div>
      <div>
        <div>
          <p>Name</p>
          <p>Branch</p>
          <p>Sem</p>
          <p>Roll No</p>
          <p>Reg No</p>
        </div>
        <div>
          <p>: {item?.name}</p>
          <p>: {item?.branch}</p>
          <p>: {item?.sem}</p>
          <p>: {item?.rollNo}</p>
          <p>: {item?.regNo}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
