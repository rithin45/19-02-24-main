import axios from "axios";
import React, { useState } from "react";
import './Build.css'
import { MenuItem, TextField, Select } from '@mui/material';
import Topbar from "../Adminpanel/Topbar";
import Sidebar from "../Adminpanel/Sidebar";

const Build = () => {
  const [inputs, setInputs] = useState({
    "name": '',
    "price": '',
    "location": '',
    "category": 'House'
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    console.log(event.target)
    setInputs({ ...inputs, [name]: value });
  }

  const handleImage = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  }

  const saveData = () => {
    const formData = new FormData();
    formData.append('name', inputs.name);
    formData.append('price', inputs.price);
    formData.append('location', inputs.location);
    formData.append('category', inputs.category);
    formData.append('image1', selectedImage);

    axios.post("http://localhost:3005/new", formData)
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
      <Topbar />
      <Sidebar />
      <div className="addbuild">
        <h2>Building Details</h2>
        <TextField label="Build name" type="text" name="name" value={inputs.name} onChange={inputHandler} /> <br /><br />
        <TextField label="Price" type="text" name="price" value={inputs.price} onChange={inputHandler} /><br /><br />
        <TextField label="Location" type="text" name="location" value={inputs.location} onChange={inputHandler} /> <br /><br />
        <Select label="Category" name="category" value={inputs.category} onChange={inputHandler}>
        <MenuItem value="House">House</MenuItem>
        <MenuItem value="Villa">Villa</MenuItem>
        <MenuItem value="Flat">Flat</MenuItem>
        </Select><br /><br />
        <label>Upload file</label>
        <input type="file" onChange={handleImage} /><br /><br />
        <button className="addproduct-btn" onClick={saveData}>ADD</button>
      </div>
    </div>
  );
}

export default Build;
