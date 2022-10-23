import Book from './shared/Book'

function WantToRead({handlePost, deleted, bookList}) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {bookList.map((item) => ( // spreading the data that is in the want-to-read state
                            <li key={item.id}><Book item={item} disabled='wantToRead' handlePost={handlePost} deleted={deleted} /></li>))
                }
                </ol>
            </div>
        </div>
    )
}
export default WantToRead