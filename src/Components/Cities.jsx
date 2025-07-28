import CityCard from './CityCard';

export default function Cities({cities, loading, error, searchTerm}) {
  if (loading) {
    return (
      <div className="loading">
        Loading weather data...
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (cities.length === 0 && searchTerm) {
    return (
      <div className="no-results">
        No cities found matching "{searchTerm}"
      </div>
    );
  }

  return (
    <ul className="cities-grid">
      {cities.map((city, index) => (
        <CityCard key={index} city={city} />
      ))}
    </ul>
  );
};