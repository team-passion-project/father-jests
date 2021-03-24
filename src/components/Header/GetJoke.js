import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
    <div>
      <h1>{joke}</h1>
    </div>
  )
}
export default GetJoke