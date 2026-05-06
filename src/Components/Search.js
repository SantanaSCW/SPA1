function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search projects..." 
        value={searchTerm} 
        onChange={(e) => onSearchChange(e.target.value)} 
      />
    </div>
  );
}