import React from 'react';
import { Link } from 'react-router-dom';
// import Art from './Art';

const Landing = () => {
  return (
    <div className="center">
      <div><Link to="/photo"><span>photo</span></Link></div>
      <div><Link to="/ecomm"><span>e-commerce</span></Link></div>
      <div><Link to="/crypto"><span>crypto</span></Link></div>
      <div><Link to="/art"><span>art</span></Link></div>
      <div><Link to="/approach"><span>approach</span></Link></div>
    </div>
  )
}

export default Landing;