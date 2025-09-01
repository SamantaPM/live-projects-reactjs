const SearchBox = ({searchTerm, setSearchTerm}) => {

  return (
    <form>
        <label htmlFor='search'>
            <input id='search' name='search' type='search' placeholder='Search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.trimStart())}
            ></input>
        </label>
    </form>
  )
}

export default SearchBox