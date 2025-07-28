import { useState, useEffect } from 'react'
import Header from './Components/Header'
import SearchSection from './Components/SearchBar'
import DateDisplay from './Components/DateToday'
import CitiesGrid from './Components/Cities'
import './index.css'

export default function App() {
  const [weatherData, setWeatherData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api-weather-app-ssd0.onrender.com/weather')
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data')
        }
        
        const data = await response.json()
        setWeatherData(data)
        setError(null)
      } catch (err) {
        setError('Failed to load weather data. Please try again later.')
        console.error('API Error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchWeatherData()
  }, [])

  const filteredCities = weatherData.filter(city =>
    city.city.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="weather-app">
      <Header />
      
      <SearchSection 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      
      <DateDisplay />
      
      <section className="cities-section">
        <div className="container">
          <CitiesGrid 
            cities={filteredCities}
            loading={loading}
            error={error}
            searchTerm={searchTerm}
          />
        </div>
      </section>
    </div>
  )
}


