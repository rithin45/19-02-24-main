import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel'; // Import carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import "./Home.css";
import Navsidebar from '../Navsidebar';

const Userhomepage = () => {

  return (
    <div>
      <Navsidebar/>
      <div style={{ 
        backgroundImage: 'linear-gradient(to bottom, #cfd9df, #e2ebf0, #e9f1f6, #edf4f7, #f0f4f8)',
        minHeight: '100vh', 
        padding: '20px' 
      }}>
        <AppBar position="static" style={{ background: 'lightblue' }}>
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
                {/* <img src={logo} alt='logo'/> */}
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        
        <div className="hero">
          <div className="hero-left">
            <h1>Your Dream Home Awaits</h1>
            <div>
              <p>Discover the perfect property that matches your lifestyle and preferences. Our expert team is here to help you find your dream home and live a comfortable, fulfilling life.</p>
              <p>Explore our wide range of properties and unlock the potential of luxurious living. Embrace the journey of finding your ideal home with us.</p>
            </div>
          </div>
          <div className="hero-right">
            {/* Add carousel component */}
            <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000}>
              <div>
                <img src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?cs=srgb&dl=pexels-david-mcbee-1546168.jpg&fm=jpg" alt="Property 1" />
              </div>
              <div>
                <img src="data:image/jpeg;base64,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" alt="Property 2" />
              </div>
              <div>
                <img src="https://wallpapers.com/images/hd/real-estate-property-contract-8nifr6s87bqllaia.jpg" alt="Property 3" />
              </div>
            </Carousel>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1 style={{ color: '#555' }}>Expert Real Estate Services</h1>
          <p style={{ color: '#777' }}>
            Discover world-class real estate services tailored to your needs. From property valuation to marketing strategies, we ensure that you get the best value for your investment.
          </p>
          <br/><br/><br/><br/><br/><br/>
        </div>

        <div>
          {/* Add other sections */}
        </div>
      </div>
    </div>
  );
};

export default Userhomepage;
