import {useContext} from 'react'
import BookContext from '../context/BookContext'
import Book from './shared/Book'

function Done() {
    const {read} = useContext(BookContext)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {read.map((item) => ( // spreading the data that is in the read state
                            <li key={item.id}><Book item={item} disabled='read' /></li>))
                    }
                </ol>
            </div>
        </div>
    )
}

export default Done