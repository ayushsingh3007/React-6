import React, { useContext } from "react";
import { Store } from "../Store/Store";

const Student = () => {
  const displayData = useContext(Store);

  return (
    <>
      <h1>Student Page</h1>
      <button id="btn-1" onClick={() => {}}>
        Add user
      </button>

      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>BATCH</th>
            <th>COURSE</th>
            <th>CONTACT</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Student;
