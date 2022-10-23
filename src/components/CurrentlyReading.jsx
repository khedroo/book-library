import Book from './shared/Book'

function CurrentlyReading({handlePost, deleted, bookList}) {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {bookList.map((item) => ( // spreading the data that is in the current state
                        <li key={item.id}><Book item={item} disabled='currentlyReading' handlePost={handlePost} deleted={deleted} /></li>))
                }
            </ol>
            </div>
        </div>
    )
}
export default CurrentlyReading