
function Book({item, disabled, handlePost, deleted}) {
    
    const handle = (e) => {
        handlePost(item, e.currentTarget.value, disabled)
        deleted(item, disabled)
    }
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url(${item.imageLinks && item.imageLinks.thumbnail})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select onChange={(e) => handle(e)} value='default'>
                        <option value='default' disabled >
                            Move to...
                        </option>
                        <option value="currentlyReading" disabled= {'currentlyReading' === `${disabled}`}>
                            Currently Reading
                        </option>
                        <option value="wantToRead" disabled= {'wantToRead' === `${disabled}`}>Want to Read</option>
                        <option value="read" disabled= {'read' === `${disabled}`}>Read</option>
                        <option value="none" disabled= {'none' === `${disabled}`} >None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{item.title}</div>
            <div className="book-authors">{item.authors}</div>
        </div>
    )
}
export default Book