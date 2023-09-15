import React, { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Store from "../Store/Store";


const Student=()=>{
     const displayData=useContext(Store);
     const Navi =useNavigate();
     function handleChange(){
        Navi('/add')
     }

    
    return(
        <>

        <h1>Student Page</h1>
        <button id="btn-1" onClick={handleChange}>add user</button>

        <table >
            <thead>
                <tr>
                    <th>NAME </th>
                    <th>BATCH</th>
                    <th>COURSE</th>
                    <th>CONTACT</th>
                </tr>
            </thead>

        {displayData.data.map((item,index)=>{
            return(
            <tbody key={index}>
                <tr >
                    <td>{item.Name}</td>
                    <td>{item.Batch}</td>
                    <td>{item.Course}</td>
                    <td><NavLink to="/edit" state={{index}}>Edit</NavLink></td>
                    
                    
                </tr>
            </tbody>)
        }
        )}

</table>






        
        </>
    )
}
export default Student;