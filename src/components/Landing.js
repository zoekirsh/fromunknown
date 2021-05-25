import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="center landing">
      <div><Link to="/photo"><span>photo</span></Link></div>
      <div><Link to="/ecomm"><span>e-commerce</span></Link></div>
      <div><a target="_blank" rel="noreferrer" href="https://twitter.com/seeyounvr"><span>crypto</span></a></div>
      <div><Link to="/art"><span>art</span></Link></div>
      <div><Link to="/approach"><span>approach</span></Link></div>
    </div>
  )
}

export default Landing;