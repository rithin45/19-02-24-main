import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li>HOME</li></a>
       </ul>
        Plots
       <ul>
        <a href='/Plot'><li>Add Plots</li></a>
       </ul>
       <ul>
       <a href="/viewdetails"><li>View Plots</li></a>
      </ul>
      Buildings
      <ul>
      <a href='/s'><li>Add Buildings</li></a>
      </ul>
      <ul>
       <a href="/bdetails"><li>View Buildings</li></a>
      </ul>
      Bookings
      <ul>
      <a href='/bbooking'><li>Building Booking</li></a>
      </ul>
      <ul>
       <a href="/pbooking"><li>Plot Booking</li></a>
      </ul>
      
    </div>
  );
};

export default Sidebar;