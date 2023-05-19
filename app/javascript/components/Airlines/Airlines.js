import  React, { useState, useEffect } from 'react'
import axios from 'axios'

const Airlines = () => {

  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    // Get airlines from api
    // Update airlines in our state
    axios.get('api/v1/airlines.json')
    .then(response => {
      setAirlines(response.data.data)
    })
    .catch(response => console.log(response))
    }, [airlines.length])

    const list = airlines.map( item => {
      return (<li key={item.attributes.name}>{item.attributes.name}</li>)
    })
  return (
    <div className="home">
      <div className="header">
        <h1>Open Flights</h1>
        <div className="subheader">Honest, unbiased airline reviews</div>
      </div>
      <div className="grid">
        <ul>{list}</ul>
      </div>
    </div>
  )
}

export default Airlines
