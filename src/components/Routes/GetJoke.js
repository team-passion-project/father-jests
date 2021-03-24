import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

function GetJoke() {
  const [joke, newJoke] = useState("")

  useEffect(() => {
    const getJoke = async() => {
      const result = await axios({
        url: "https://icanhazdadjoke.com/",
        headers: {Accept: "application/json"}
      })
      console.log(result.data);
      newJoke(`${result.data.joke}`)
    }
    getJoke()
  }, [])

  return (
    <div className="jokes">
      <h2>{joke}</h2>
      <button type="button" class="btn btn-danger" onClick={getJoke}>Get a new Joke</button>
    </div>
  )
}
export default GetJoke