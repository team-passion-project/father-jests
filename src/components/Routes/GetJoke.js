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
      newJoke(`${result.data.joke}`)
    }
    getJoke()
  }, [])

  return (
    <div className="joke">
      <h2>{joke}</h2>
      <Button type="button" class="btn btn-danger" onClick={() => 
        {
          const getJoke = async() => {
            const result = await axios({
              url: "https://icanhazdadjoke.com/",
              headers: {Accept: "application/json"}
            })
            newJoke(`${result.data.joke}`)
          }
          getJoke()
        }
      }>Get a new Joke</Button>
    </div>
  )
}
export default GetJoke