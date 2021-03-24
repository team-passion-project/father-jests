import React, { useState, useEffect } from 'react'
import axios from 'axios'

function GetJoke() {
  const [joke, newJoke] = useState("")

  useEffect(() => {
    const getJoke = async() => {
      const result = await axios(
        'https://icanhazdadjoke.com/'
      )
      console.log(result.data);
      newJoke(`${result.data[0].joke}`)
    }
    getJoke()
  }, [])

  return (
    <div>
      <h2>{joke}</h2>
    </div>
  )
}
export default GetJoke