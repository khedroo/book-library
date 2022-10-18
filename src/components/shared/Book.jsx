import { useContext } from 'react'
import BookContext from '../../context/BookContext'

function Book({item, disabled}) {

    // taking the delete function and the data posting one from the context component
    const {handlePost, deleted} = useContext(BookContext)
    
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
                        <option value="none" >None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{item.title}</div>
            <div className="book-authors">{item.authors}</div>
        </div>
    )
}
export default Book