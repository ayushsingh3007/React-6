import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Store from "../Store/Store";

const Student = () => {
  const displayData = useContext(Store);
  const navigate = useNavigate();

  function handleEdit(index) {
    navigate(`/edit/${index}`);
  }

  function handleAddUser() {
    navigate("/add");
  }

  return (
    <>
      <h1>Student Page</h1>
      <button id="btn-1" onClick={handleAddUser}>
        Add user
      </button>

      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>BATCH</th>
            <th>COURSE</th>
            <th>CONTACT</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {displayData.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Batch}</td>
                <td>{item.Course}</td>
                <td>{item.Contact}</td>
                <td>
                  <NavLink to="#" onClick={() => handleEdit(index)}>
                    Edit
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Student;
