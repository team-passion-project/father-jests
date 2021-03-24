import React, { useState, useEffect } from 'react'
import axios from 'axios'

function GetJoke() {
  const [joke, newJoke] = useState(null)

  useEffect(() => {
    axios({
      url: 'https://icanhazdadjoke.com/',
      method: 'GET',
      data: { joke }
    })
      .then(res => {
        console.log(res);
        newJoke(res.data.joke)
        console.log(newJoke);
      })
      .catch(console.error)
  })

  return (
    <div>
      <h2>{joke}</h2>
    </div>
  )
}
export default GetJoke