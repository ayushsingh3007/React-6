import React, { useContext, useState } from "react";
import { Store } from "../Store/Store";

const AddStudent = () => {
  const [newStudent, setNewStudent] = useState({
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
    Contact: "Edit",
  });

  const { data, dataFunc } = useContext(Store);

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStudent = () => {
    const updatedData = [...data, newStudent];
    dataFunc(updatedData);
    setNewStudent({
      Name: "",
      Age: "",
      Course: "",
      Batch: "",
      Contact: "Edit",
    });
  };

  return (
    <>
      <label>Name</label>
      <input
        type="text"
        name="Name"
        value={newStudent.Name}
        onChange={handleChange}
      />
      <label>Age</label>
      <input
        type="number"
        name="Age"
        value={newStudent.Age}
        onChange={handleChange}
      />
      <label>Course</label>
      <input
        type="text"
        name="Course"
        value={newStudent.Course}
        onChange={handleChange}
      />
      <label>Batch</label>
      <input
        type="text"
        name="Batch"
        value={newStudent.Batch}
        onChange={handleChange}
      />
      <button onClick={() => {
        console.log("Button clicked");
        handleAddStudent();
      }}>
        Add Student
      </button>
    </>
  );
};

export default AddStudent;
