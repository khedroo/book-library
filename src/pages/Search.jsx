import { useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";
import Book from "../components/shared/Book";

function Search({ search, handlePost, deleted }) {
  // user input result
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);
  // this function runs only when changing the select options
  const handleChange = async (e) => {
    if (e.target.value.length > 0) {
      const alreadyAdded = await getAll();
      const searchResult = await search(e.target.value, 20);
      if (searchResult.hasOwnProperty("error")) {
        setError(true);
      } else {
        setError(false);
        searchResult.map((searchBook) => {
          const found = alreadyAdded.find((book) => book.id === searchBook.id);
          searchBook.disable = found ? found.shelf : "none";
          return searchBook;
        });
        setResult(searchResult);
      }
    } else {
      setError(false);
      setResult([]);
    }
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {error ? (
            <li>
              <h2>there is no book starts like his</h2>
            </li>
          ) : (
            result.map((item) => {
              return (
                <li key={item.id}>
                  <Book
                    item={item}
                    disabled={item.disable}
                    handlePost={handlePost}
                    deleted={deleted}
                  />
                </li>
              );
            })
          )}
        </ol>
      </div>
    </div>
  );
}
export default Search;
