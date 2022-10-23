// css file
import "./App.css";
import { getAll, update, search } from "./BooksAPI";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

// search page
import Search from "./pages/Search";

// components
import CurrentlyReading from "./components/CurrentlyReading";
import WantToRead from "./components/WantToRead";
import Done from "./components/Done";

function App() {
  // state for books in the read shelf
  const [read, setRead] = useState([]);

  // state for books in the want-to-read shelf
  const [want, setWant] = useState([]);

  // state for books in the currently-reading shelf
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    // fetch the books data from the back-end server once the website is opened
    fetchBooksData();
  }, []);

  const fetchBooksData = async () => {
    const allData = await getAll();
    setRead(allData.filter((item) => item.shelf === "read"));
    setWant(allData.filter((item) => item.shelf === "wantToRead"));
    setCurrent(allData.filter((item) => item.shelf === "currentlyReading"));
  };
  // function to modify the states once adding books or changing shelfs data
  const handlePost = async (item, bookshelf) => {
    if (bookshelf === "currentlyReading") {
      setCurrent([item, ...current]);
      update(item, bookshelf);
    } else if (bookshelf === "wantToRead") {
      setWant([item, ...want]);
      update(item, bookshelf);
    } else if (bookshelf === "read") {
      setRead([item, ...read]);
      update(item, bookshelf);
    } else {
      update(item, bookshelf);
    }
  };

  // delete the book from shelfs once changing its shelf or just being deleted
  const deleted = (book, disabled) => {
    if (disabled === "currentlyReading")
      setCurrent(current.filter((item) => item.id !== book.id));
    else if (disabled === "wantToRead")
      setWant(want.filter((item) => item.id !== book.id));
    else if (disabled === "read")
      setRead(read.filter((item) => item.id !== book.id));
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <div className="app">
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                    <div>
                      <CurrentlyReading
                        handlePost={handlePost}
                        deleted={deleted}
                        bookList={current}
                      />
                      <WantToRead
                        handlePost={handlePost}
                        deleted={deleted}
                        bookList={want}
                      />
                      <Done
                        handlePost={handlePost}
                        deleted={deleted}
                        bookList={read}
                      />
                    </div>
                  </div>
                  <div className="open-search">
                    <Link to="/search">Add a book</Link>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/search"
          element={
            <Search search={search} handlePost={handlePost} deleted={deleted} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
