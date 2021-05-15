import React, { useState, useEffect, useContext } from 'react'

export const API_ENDPOINT = `https://swapi.dev/api/starships/`

console.log(API_ENDPOINT)

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({ show: false, msg: '' })
    const [swapiContent, setSwapiContent] = useState([])
    const [query, setQuery] = useState('Iron Man')

    const fetchSwapiContent = async (url) => {
        setIsLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            //console.log(data.results[0].name)
            setSwapiContent(data.results)
            setError({ show: false, msg: '' })
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setError({ show: true, msg: 'Error loading data...' })
        }
        
    }

    useEffect(() => {
        fetchSwapiContent(`${API_ENDPOINT}`)
    }, [])
    
    return (
        <AppContext.Provider value={{isLoading, error, query, swapiContent, setQuery}}>
          {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }