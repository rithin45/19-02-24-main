import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; 
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { Buffer } from 'buffer';
import Navsidebar from './Navsidebar';

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [product, setProduct] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    date:'',
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3005/view/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      ...bookingDetails,
      productId: product.name 
    };

    axios.post('http://localhost:3005/bookings', bookingData)
      .then(response => {
        console.log('Booking saved successfully:', response.data);
        setBookingConfirmed(true); 
        setTimeout(() => {
          navigate('/'); // Redirect after a delay
        }, 3000); // 3 seconds delay
      })
      .catch(err => {
        console.error('Error saving booking:', err);
      });

    setBookingDetails({
      name: '',
      email: '',
      phone: '',
      date:'',
    });
  };

  return (
    <div>
      <Navsidebar />
      {product && (
        <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 1}}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <img 
              src={`data:image/jpeg;base64,${Buffer.from(product.image1.data).toString('base64')}`} 
              alt={product.name} 
              style={{ maxWidth: '100%', height: 'auto', marginBottom: 15 }} 
            />
            <Typography variant="body1">
              Price: {product.price}
            </Typography>
            <Typography variant="body1">
              Location: {product.location}
            </Typography>
            <Typography variant="body1">
              Category: {product.category}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField 
                label="Name"
                name="name"
                value={bookingDetails.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField 
                label="Email"
                name="email"
                type="email"
                value={bookingDetails.email}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField 
                label="Phone"
                name="phone"
                type="tel"
                value={bookingDetails.phone}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
               <TextField 
                label="Date"
                name="date"
                type="date"
                value={bookingDetails.date}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Submit Booking
              </Button>
            </form>
            {bookingConfirmed && (
              <Typography variant="body1" color="green">
                Booking confirmed! Redirecting to home page...
              </Typography>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BookingDetails;
