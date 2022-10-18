import {useContext} from 'react'
import BookContext from '../context/BookContext'
import Book from './shared/Book'

function WantToRead() {
    const {want} = useContext(BookContext)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {want.map((item) => ( // spreading the data that is in the want-to-read state
                            <li key={item.id}><Book item={item} disabled='wantToRead' /></li>))
                }
                </ol>
            </div>
        </div>
    )
}
export default WantToRead