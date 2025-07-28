

export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="search-section">
            <h4>Search for a city</h4>
            <input
                type="search"
                className="search-input"
                placeholder="Dammam"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}