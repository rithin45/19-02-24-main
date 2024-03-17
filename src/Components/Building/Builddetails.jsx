import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Buildedit from "./Buildedit";
import './Buildview.css'
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';
import { Buffer } from 'buffer';


const Builddetails = () => {
    const [category, setCategory] = useState([]);
    const [selected, setSelected] = useState(null);
    const [update, setUpdate] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get("http://localhost:3005/builds"); // Adjust the URL to match your backend endpoint
              setCategory(response.data);
          } catch (error) {
              console.log(error);
          }
      };
      fetchData();
  }, []);
  
    const updateValues = (row) => {
        setSelected(row);
        setUpdate(true);
    }
  
    let result = (
        <div className='bb'>
            <Topbar />
            <Sidebar />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {category.map((row, pos) => (
                            <TableRow key={pos}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>{row.location}</TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>
                                    <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`} width="50" height="50" alt='error' />
                                </TableCell>
                                <TableCell><EditIcon onClick={() => updateValues(row)} /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
  
    if (update) {
        result = <Buildedit data={selected} method='put' />;
    }
  
    return result;
}

export default Builddetails;
