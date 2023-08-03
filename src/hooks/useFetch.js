import { useEffect, useState } from "react"
import axios from "axios"

export default function useFetch(initialUrl) {
  const [states, setStates] = useState({
    data: null,
    isLoading: false,
    statusCode: 200,
    url: initialUrl,
  })

  const setUrl = (url) => {
    setStates((currStates) => ({
      ...currStates,
      url,
    }))
  }

  useEffect(() => {
    let canceled = false

    setStates((currStates) => ({
      ...currStates,
      isLoading: true,
    }))

    axios
      .get(states.url)
      .then((response) => {
        if (!canceled) {
          setStates((currStates) => ({
            ...currStates,
            data: response.data,
            isLoading: false,
            statusCode: response.status,
          }))
        }
      })
      .catch((error) => {
        if (!canceled) {
          setStates((currStates) => ({
            ...currStates,
            data: null,
            isLoading: false,
            statusCode: error.response?.status,
          }))
        }
      })

    return () => (canceled = true)
  }, [states.url])

  return [states, states.isLoading, setUrl]
}
