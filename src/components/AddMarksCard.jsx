import React, { useState } from 'react'
import '../styles/SemStudents.scss'
import axios from 'axios'

const AddMarksCard = ({item, testNo, sub}) => {

    const [marks, setMarks] = useState("");

    const submitHandler = async (id) => {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${document.cookie.split("=")[1]}`,
            },
            withCredentials: true,
            sameSite: "None",
          };
    
          const { data } = await axios.put(
            `https://marks-management-system-backend.vercel.app/api/v1/teacher/addmarks/${id}`,
            { number: marks, testNo, subject: sub },
            config
          );
    
          setMarks('')
        } catch (error) {
            console.log(error)
        }
      };
    
  return (
    <div className="semStu">
    <div>
      <p>{item?.name}</p>
      <p>{item?.regNo}</p>
      <p>{item?.rollNo}</p>
    </div>
    <div>
      <input
        type="text"
        placeholder="marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      <button onClick={() => submitHandler(item?._id)}>Submit</button>
    </div>
  </div>
  )
}

export default AddMarksCard