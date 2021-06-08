import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CircleType from 'circletype';

const Landing = () => {
  const circleText = useRef();

  useEffect(() => {
    new CircleType(circleText.current)
  }, [])


  return (
    <div ref={circleText} id="circletext" className="center landing">
      <span><Link to="/photo">photo</Link></span>
      <span className="black">_</span>
      <span><Link to="/ecomm">e-commerce</Link></span>
      <span className="black">_</span>
      <span><a target="_blank" rel="noreferrer" href="https://twitter.com/seeyounvr">crypto</a></span>
      <span className="black">_</span>
      <span><Link to="/art">art</Link></span>
      <span className="black">_</span>
      <span><Link to="/approach">approach</Link></span>
      <span className="black">_</span>
    </div>
  )
}

export default Landing;