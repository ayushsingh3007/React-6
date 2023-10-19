import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../Store/Store";

const EditStudent = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const { students, setStudents } = useContext(StoreContext);

  const [updateData, setUpdateData] = useState({
    Name: students[index]?.Name || '',
    Age: students[index]?.Age || '',
    Course: students[index]?.Course || '',
    Batch: students[index]?.Batch || '',
  });

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  }

  const handleUpdate = () => {
    const updatedStudents = [...students];
    updatedStudents[index] = updateData;
    setStudents(updatedStudents);
    navigate("/student");
  }

  return (
    <>
      <label>Name</label>
      <input
        type="text"
        name="Name"
        value={updateData.Name}
        onChange={handleChange}
      />
      <label>Age</label>
      <input
        type="number"
        name="Age"
        value={updateData.Age}
        onChange={handleChange}
      />
      <label>Course</label>
      <input
        type="text"
        name="Course"
        value={updateData.Course}
        onChange={handleChange}
      />
      <label>Batch</label>
      <input
        type="text"
        name="Batch"
        value={updateData.Batch}
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => navigate("/student")}>Go Back</button>
    </>
  );
};

export default EditStudent;
