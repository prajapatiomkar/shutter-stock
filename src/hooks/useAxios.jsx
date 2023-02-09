import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useAxios(param) {
    const [response, setResponse] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    axios.defaults.baseURL = "https://api.unsplash.com/"
    const fetchData = async (url) => {
        try {
            setIsLoading(true)
            const res= await axios.get(url)
            setResponse(res.data.results)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchData(param)
    },[param])
    return {
        response,
        isLoading,
        error,
        fetchData:url=>fetchData(url)
    }
}
