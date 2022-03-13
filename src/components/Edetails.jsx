import axios from "axios";
import { useEffect, useState } from "react";
import "./Form.css";

export const Edetails=()=>{
  const [showdata, setShowdata] =useState([]);

  useEffect(()=>{
    getData();
  }, []);

  const getData=()=>{
      axios.get("http://localhost:3001/data").then((res)=>{
          setShowdata(res.data);
      });
  }


    return (
       <div className="details">
           <table>
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Age</th>
                       <th>Address</th>
                       <th>Department</th>
                       <th>Salary</th>
                       <th>Marital Status</th>
                   </tr>
               </thead>
               <tbody>
                 {showdata.map(({
                  Name,
                  age,
                  address,
                  departments,
                  salary,
                  marital_status,
                  id,
                 })=>{

                  return <tr key={id}>
                  <td>{Name}</td>
                  <td>{age}</td>
                  <td>{address}</td>
                  <td>{departments}</td>
                  <td>{salary}</td>
                  <td>{marital_status}</td>

                  </tr>  
                 }
                 )}
               </tbody>
           </table>
       </div>
    )
}