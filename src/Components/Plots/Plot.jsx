
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
  const [selectedImage, setSelectedImage] = useState(null);


  const inputHandler = (e) => {
    const { name, value } = e.target
    console.log(e.target.value)
    // setInputs({ ...inputs, [name]: value });
    setInputs((prevData)=>({...prevData,[name]:value}))
  };
  const handleImage = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  }

  // const addHandler = () => {
  //   axios.post("http://localhost:3005/plot", inputs)
  //     .then((response) => {
  //       alert("Saved");
  //     })
  //     .catch(err => console.log(err));
  // };
  const saveData = () => {
    const formData1 = new FormData();
    formData1.append('pname', inputs.pname);
    formData1.append('pprice', inputs.pprice);
    formData1.append('plocation', inputs.plocation);
    formData1.append('pcategory', inputs.pcategory);
    formData1.append('image2', selectedImage);

    axios.post("http://localhost:3005/plot", formData1)
      .then((response) => {
        alert("Record Saved");
      })
      .catch(err => {
        console.log(err);
        alert("Error saving record");
      });
  }

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
      
      <label>Upload file</label>
        <input type="file" onChange={handleImage} /><br /><br />
        <button className="addproduct-btn" onClick={saveData}>ADD</button>
    </div>
  );
};

export default Plot;
