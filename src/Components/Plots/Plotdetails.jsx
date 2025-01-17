import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import './Plotview.css'
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';
import Plotedit from './Plotedit';
import { Buffer } from 'buffer';


const Plotdetails = () => {
    var[sub,setSub]=useState([]);
    var [selected,setSelected]=useState();
  var [update,setUpdate]=useState(false);

    useEffect(()=>{
        axios.get("http://localhost:3005/views")
        .then(response=>{
            setSub(response.data)
        })
        .catch(err=>console.log(err))
    },[])
    const updateValues = (row) => {
        setSelected(row)
        setUpdate(true)
    }
    var result=
    <div className='bb'>
        <Topbar/>
        <Sidebar/>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Plot name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sub.map((row,pos) => {

                        return (
                            <TableRow
                                key={pos}>
                                <TableCell>{row.pname}</TableCell>
                                <TableCell>{row.pprice}</TableCell>
                                <TableCell>{row.plocation}</TableCell>
                                <TableCell>{row.pcategory}</TableCell>
                                <TableCell>
                                    <img src={`data:image/jpeg;base64,${Buffer.from(row.image2.data).toString('base64')}`} width="50" height="50" alt='error' />
                                </TableCell>
                                <TableCell><EditIcon onClick={()=>updateValues(row)}/></TableCell>
                               
                            </TableRow>

                        )
                    })}
         </TableBody>
            </Table>
        </TableContainer>
    </div>
  if(update)
  result=<Plotedit data={selected} method='put'/>
  return(result)
}

export default Plotdetails
