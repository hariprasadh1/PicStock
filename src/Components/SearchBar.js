import { useState } from "react";

function SearchBar({onSubmit}) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();

    onSubmit(searchText)

  }

  return (
    <div className="container is-centered">
        <div className="column is-half">
        <form onSubmit={handleSubmit}>
          <input
              className="mt-4 input is-info is-hovered"
              type="text"
              placeholder="Enter text to search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button onClick={handleSubmit} className="mt-3 button is-info">Search</button>
        </form>
        </div>             

    </div>
  );
}

export default SearchBar;
