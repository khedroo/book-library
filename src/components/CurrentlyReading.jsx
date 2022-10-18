import {useContext} from 'react'
import BookContext from '../context/BookContext'
import Book from './shared/Book'

function CurrentlyReading() {
    const {current} = useContext(BookContext)

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {current.map((item) => ( // spreading the data that is in the current state
                        <li key={item.id}><Book item={item} disabled='currentlyReading' /></li>))
                }
            </ol>
            </div>
        </div>
    )
}
export default CurrentlyReading