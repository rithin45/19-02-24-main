import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Topbar from "../Adminpanel/Topbar";
import Sidebar from "../Adminpanel/Sidebar";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Pbooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3005/bookingss')
      .then(response => {
        setBookings(response.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
        <div>
    <Topbar />
      <Sidebar />
    
      <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>Building Name</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Date</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {bookings.map(booking => (
              <TableRow key={booking._id}>
                <TableCell>{booking.productId}</TableCell>
                    <TableCell>{booking.name}</TableCell>
                    <TableCell>{booking.email}</TableCell>
                    <TableCell>{booking.phone}</TableCell>
                    <TableCell>{booking.date}</TableCell>
              </TableRow>
            ))}
             
        </TableBody>
    </Table>
</TableContainer>
    </div>
    </div>
  );
};

export default Pbooking;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ensure the container takes the full height of the viewport
  },
  content: {
    maxWidth: 800,
    width: '100%',
    padding: 20,
    textAlign: 'center',
  },
};
