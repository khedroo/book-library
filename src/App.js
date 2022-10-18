// css file
import "./App.css";

import {BookProvider} from "./context/BookContext";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from "react-router-dom";

// search page
import Search from "./pages/Search";

// components
import CurrentlyReading from './components/CurrentlyReading'
import WantToRead from './components/WantToRead'
import Done from './components/Done'

function App() {

  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={
            <>
              <div className="app">
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                    <div>
                      <CurrentlyReading />
                      <WantToRead />
                      <Done />
                    </div>
                  </div>
                  <div className="open-search">
                    <Link  to="/search" >Add a book</Link>
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;
