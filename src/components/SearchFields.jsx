const SearchFields = ({searchValue, setSearchValue}) => {
    return (
      <div className="inputContainer">
        <input
          id="anime"
          type="text"
          value={searchValue}
          placeholder=" "
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <label htmlFor="anime">
          <p>Chercher un animé dans la liste</p>
        </label>
      </div>
    );
  };
  
  export default SearchFields;