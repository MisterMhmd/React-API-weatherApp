
export default function CityCard({city}) {
  return (
    <li className="city-card">
      <h2 className="city-name">
        <span>{city.city}</span>
      </h2>
      <span className="city-temp">{city.temperature}°C</span>
      <figure>
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
          alt="Weather icon"
        />
        <figcaption className="weather-description">
          {city.description}
        </figcaption>
      </figure>
    </li>
  )
}
