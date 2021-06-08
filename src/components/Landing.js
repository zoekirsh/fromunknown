import React from 'react';
import { Link } from 'react-router-dom';
import "../Custom.scss"

const Landing = () => {


  const circleWord = (word, startingIndex) => {
    return word.split("").map((char, i) => {
      return (
        <span className={`char${startingIndex + i}`}>{char}</span>
      )
    })
  }


  return (
    <div id="circle-parent" className="center landing">
      <div><Link to="/photo">{circleWord("photo", 0)}</Link><span className="char6"> </span></div>
    
      <div><Link to="/ecomm">{circleWord("e-commerce", 7)}</Link><span className="char17"> </span></div>
    
      <div><a target="_blank" rel="noreferrer" href="https://twitter.com/seeyounvr">{circleWord("crypto", 18)}</a><span className="char24"> </span></div>
    
      <div><Link to="/art">{circleWord("art", 25)}</Link><span className="char28"> </span></div>
    
      <div><Link to="/approach">{circleWord("approach", 29)}</Link><span className="char37"> </span></div>
    
    </div>
  )
}

export default Landing;