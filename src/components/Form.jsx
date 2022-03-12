import { useState } from "react"
import axios from "axios";

export const Form=()=>{
    //const [text, setText] =useState("");
 const [formdata, setformData] =useState({});


 const handleChange=(e)=>{
     const key=e.target.name;
     if(key==='marital_status'){
         e.target.value=e.target.checked;
     }
 
 setformData({
     ...formdata,
     [key]:e.target.value,
 });
}


    return (
       <form onSubmit={(e)=>{
           e.preventDefault();
           axios.post("http://localhost:3001/data", formdata).then(()=>{
               setformData({
                   name: "",
                   age: "",
                   address:"",
                   departments:"",
                   salary:"",
                   marital_status: "",
               })
           })
       }}>
         <input type="text" name="name" value={formdata.name} placeholder="Name" onChange={handleChange} />
         <input type="number" name="age" value={formdata.age} placeholder="Age" onChange={handleChange} />
         <input type="text" name="address" value={formdata.address} placeholder="Address" onChange={handleChange} />
        <select name="departments" value={formdata.departments} id="" onChange={handleChange}>
            <option value="Department">Departments</option>
            <option value="it">IT</option>
            <option value="non">Non-IT</option>
            </select>
            <input type="number" name="salary" value={formdata.salary} placeholder="Salary" onChange={handleChange} /> 
         <span>Marital Status</span><input type="checkbox" name="marital_status" value={formdata.marital_status} onChange={handleChange}  />
         <input type="submit" value="Submit" />
           
           </form>
    )
}