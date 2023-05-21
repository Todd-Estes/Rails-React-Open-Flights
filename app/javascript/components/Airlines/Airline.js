import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Airline = (props) => {

  const { attributes } = props;
  const { 
    image_url,
    name,
    avg_score,
    slug } = attributes;

  return (
    <div className="card">
      <div className="airline-logo">
        <img src={image_url} alt={name}/>
        </div>
      <div className="airline-name">{name}</div>
      <div className="airline-score">{avg_score}</div>
      <div className="airline-link">
        <Link to={"/airlines/" + slug}>View Airline</Link>
      </div>
    </div>
  )
}

export default Airline
