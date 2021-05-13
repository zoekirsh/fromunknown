import React from 'react';
import { Redirect } from 'react-router-dom'
// import Art from './Art';

const Landing = () => {
  return (
    <div className="center">
      <div><span onClick={() => <Redirect to="/photo" push={true}/>}>photo</span></div>
      <div><span>e-commerce</span></div>
      <div><span>crypto</span></div>
      <div><span>art</span></div>
      <div><span>approach</span></div>
    </div>
  )
}

export default Landing;