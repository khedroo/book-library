import Book from './shared/Book'

function Done({handlePost, deleted, bookList}) {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookList.map((item) => ( // spreading the data that is in the read state
                            <li key={item.id}><Book item={item} disabled='read' handlePost={handlePost} deleted={deleted} /></li>))
                    }
                </ol>
            </div>
        </div>
    )
}

export default Done