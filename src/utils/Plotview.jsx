import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Alert } from '@mui/material';
import Navsidebar from './Navsidebar';
import { Buffer } from 'buffer';

const Plotview = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3005/views")
      .then(response => {
        setProducts(response.data);
      })
      .catch(err => {
        setError("Error fetching data. Please try again later.");
      });
  }, []);

  return (
    <div>
      <Navsidebar />
      <Typography variant='h4' gutterBottom>
        Plots
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxHeight: 700, marginBottom: '20px' }}>
              <CardActionArea>
                <Link to={`/plots/${product._id}`} style={{ textDecoration: 'none' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`data:image/jpeg;base64,${Buffer.from(product.image2.data).toString('base64')}`}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.pname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: {product.pprice}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Location: {product.plocation}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Category: {product.pcategory}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Plotview;
