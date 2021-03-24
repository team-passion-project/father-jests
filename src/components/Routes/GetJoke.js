import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

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
      <Card bg="light">
        <Card.Body>
        <h2>{joke}</h2>
        <Button variant="danger" size="lg" className="btn" onClick={() => 
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
        }>More!</Button>
        </Card.Body>
      </Card>
  )
}
export default GetJoke