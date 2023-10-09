import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Store from "../Store/Store";

const EditStudent = () => {
  const navigate = useNavigate();
  const { index } = useParams();
  const contextData = useContext(Store);
  const [updateData, setUpdateData] = useState({
    Name: contextData.data[index].Name,
    Age: contextData.data[index].Age,
    Course: contextData.data[index].Course,
    Batch: contextData.data[index].Batch,
  });

  function handleChange(e) {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  }

  const handleUpdate = () => {
    contextData.data[index] = updateData;
    navigate("/student");
  };

  return (
    <>
      <label>Name </label>
      <input
        type="text"
        name="Name"
        value={updateData.Name}
        onChange={handleChange}
      />
      <label>Age </label>
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
