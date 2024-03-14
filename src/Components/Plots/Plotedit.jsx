import React, { useEffect, useState } from 'react'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'
import './Plot.css'
const Plotedit = (props) => {
   

    var[inputs,setInputs]=useState(props.data)
    const inputHandler=(event)=>
    {

        const { name, value } =event.target
        setInputs((inputs) => ({ ...inputs,[name]: value }))
        console.log(inputs)
    }
    const addHandler=()=>{
        if(props.method==='put'){

            axios.put("http://localhost:3005/edits/"+inputs._id,inputs)
            .then(response=>{
                console.log("post data"+response.data)
                alert("Success")
                window.location.reload(false)
            })
            .catch(err=>console.log(err))
        }
    }
  return (
    <div>
      <Topbar/>
      <Sidebar/>
      <h2>Category</h2>
      <TextField label="Plot name" type="text" name="pname"value={inputs.pname}onChange={inputHandler}/> <br /><br />
        <TextField label="Price" type="text" name="pprice" value={inputs.pprice}onChange={inputHandler}/><br /><br />
        <TextField label="Location" type="text" name="plocation" value={inputs.plocation} onChange={inputHandler}/> <br /><br />
  
        <Select label="Category" name="pcategory" value={inputs.pcategory}onChange={inputHandler}>
          <MenuItem value="Plots">Plots</MenuItem>
        </Select><br /><br />
  <Button variant="contained" onClick={addHandler} >Update</Button>
  </div>
    
  )
}

export default Plotedit
