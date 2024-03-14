
import { Button, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import './Plot.css';
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';

const Plot = () => {
  const [inputs, setInputs] = useState({
    "pname":'',
    "pprice":'',
    "plocation":'',
    "pcategory":'Residential Plots'
  });

  const inputHandler = (e) => {
    const { name, value } = e.target
    console.log(e.target.value)
    // setInputs({ ...inputs, [name]: value });
    setInputs((prevData)=>({...prevData,[name]:value}))
  };

  const addHandler = () => {
    axios.post("http://localhost:3005/plot", inputs)
      .then((response) => {
        alert("Saved");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Topbar/>
      <Sidebar/>
      <h2>Category</h2>
      <TextField label="Plot name" type="text" name="pname" value={inputs.pname} onChange={inputHandler}/> <br /><br />
      <TextField label="Price" type="text" name="pprice" value={inputs.pprice} onChange={inputHandler}/><br /><br />
      <TextField label="Location" type="text" name="plocation" value={inputs.plocation} onChange={inputHandler}/> <br /><br />
  
      <Select label="Category" name="pcategory" value={inputs.pcategory} onChange={inputHandler}>
        <MenuItem value="Residential Plots">Residential Plots</MenuItem>
        <MenuItem value="Agricultural Plots">Agricultural Plotss</MenuItem>
        <MenuItem value="Industrial Plots">Industrial Plots</MenuItem>
      </Select><br /><br />
      
      <Button variant="contained" onClick={addHandler}>Submit</Button>
    </div>
  );
};

export default Plot;
