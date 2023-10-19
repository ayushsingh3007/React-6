import React, { useContext, useState } from "react";
import { StoreContext } from "../Store/Store";

const AddStudent = () => {
  const [newStudent, setNewStudent] = useState({
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
  });

  const { students, setStudents } = useContext(StoreContext);

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  }

  const handleAddStudent = () => {
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    setNewStudent({
      Name: "",
      Age: "",
      Course: "",
      Batch: "",
    });
  }

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
      <button onClick={handleAddStudent}>Add Student</button>
    </>
  );
};

export default AddStudent;
