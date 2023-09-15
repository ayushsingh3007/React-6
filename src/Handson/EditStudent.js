import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Store from "../Store/Store";

const EditStudent=()=>{
    const Navigate=useNavigate();
    const indexData=useLocation().state.index;
    console.log(indexData)

    const contextData=useContext(Store);




  const updateData={
    Name:"contextData.data[indexData].Name",
    Age:"contextData.data[indexData].Age",
    Course:"contextData.data[indexData].Course",
    Batch:"contextData.data[indexData].Batch"
  }

    function handleChange(e){
     updateData[e.target.name]=e.target.value;
    }


  




    const handleUpdate=()=>{
        console.log("handle click")
        contextData.data[indexData]=updateData;
    
        Navigate('/student')
    }


    return(
        <>
        <label>Name </label>
        <input type="text" name="Name" placeholder=" Enter Name" onChange={handleChange}/>
        <label>Age </label>
        <input type="number" name="Age" placeholder="Enter Age" onChange={handleChange}/>
        <label>Course</label>
        <input type="text" name="Course" placeholder="Enter Course" onChange={handleChange}/>
        <label>Batch</label>
        <input type="text" name="Batch" placeholder="Enter Batch" onChange={handleChange}/>  
        <button onClick={handleUpdate}>Update</button>
        <button onClick={()=>Navigate('/student')}>Go Back</button>
        </>

    )
}
export default EditStudent;