import axios from 'axios'

export const getJoke = () => {
  return axios({
    method: 'GET',
    url: 'https://icanhazdadjoke.com/',
    data: {
      joke: joke
    }
  })
}