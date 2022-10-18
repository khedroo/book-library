import React from 'react'
import { createContext, useState , useEffect } from 'react' //used hooks

/*
    getting the global states and global functions byusing the useContext hook instead of
    passing props all the way from the parent components to the descendants 
*/

const BookContext = createContext()
export const BookProvider = ({children}) => {
    let token = localStorage.token;
    // random token for requests authorization
    if (!token) token = localStorage.token = Math.random().toString(36).substr(-8)

    // request headers
    const headers = {
    Accept: "application/json",
    Authorization: token,
    }
    // state for books in the read shelf
    const [read, setRead] = useState([])

    // state for books in the want-to-read shelf
    const [want, setWant] = useState([])

    // state for books in the currently-reading shelf
    const [current, setCurrent] = useState([])


    useEffect(() => {
        // fetch the books data from the back-end server once the website is opened
        fetchBooksData()
    }, [])

    //books data Url
    const url = `https://reactnd-books-api.udacity.com/books`

    // function to get the books data 
    const fetchBooksData = async () => {
        const allData = await getAll()
        setRead(allData.filter((item) => item.shelf === 'read'))
        setWant(allData.filter((item) => item.shelf === 'wantToRead'))
        setCurrent(allData.filter((item) => item.shelf === 'currentlyReading'))
    }

    // function to modify the states once adding books or changing shelfs data
    const handlePost = async (item, bookshelf, disabled) => {
        if (disabled === 'search') {
            const alreadyAdded = await getAll()
            for (const book of alreadyAdded)
            {
                if (book.id === item.id && book.shelf === bookshelf) {
                    return `You have already added this book to your ${book.shelf} shelf.`
                } else if (book.id === item.id && book.shelf !== bookshelf) {
                    if (book.shelf === 'currentlyReading')
                    {
                        deleted(item, 'currentlyReading')
                    }
                    else if (book.shelf === 'wantToRead')
                    {
                        deleted(item, 'wantToRead')
                    }
                    else if (book.shelf === 'read')
                    {
                        deleted(item, 'read')
                    }
                }
            }
            if (bookshelf === 'currentlyReading')
            {
                setCurrent([item, ...current])
                update(item, bookshelf)
            }
            else if (bookshelf === 'wantToRead')
            {
                setWant([item, ...want])
                update(item, bookshelf)
            }
            else if (bookshelf === 'read')
            {
                setRead([item, ...read])
                update(item, bookshelf)
            }
        } else {    
            if (bookshelf === 'currentlyReading') {
                setCurrent([item, ...current])
                update(item, bookshelf)
            }
            else if (bookshelf === 'wantToRead') {
                setWant([item, ...want])
                update(item, bookshelf)
            }
            else if (bookshelf === 'read') {
                setRead([item, ...read])
                update(item, bookshelf)
            }
            else{
                update(item, bookshelf)
            }
        }
    }

    // delete the book from shelfs once changing its shelf or just being deleted
    const deleted = (book, disabled) => {
        if (disabled === 'currentlyReading') setCurrent(current.filter((item) => item.id !== book.id))
        else if (disabled === 'wantToRead') setWant(want.filter((item) => item.id !== book.id))
        else if (disabled === 'read') setRead(read.filter((item) => item.id !== book.id))
    }

    // get the books that were added before
    const getAll = () =>
        fetch(url, { headers })
            .then((res) => res.json())
            .then((data) => data.books)
    
    // modifying data in the back-end server to keep the data even after refreshing
    const update = (book, shelf) =>
        fetch(`${url}/${book.id}`, {
            method: "PUT",
            headers: {
            ...headers,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ shelf }),
        }).then((res) => res.json())
    
        // search function returning data from the back-end server
    const search = (query, maxResults) =>
        fetch(`https://reactnd-books-api.udacity.com/search`, {
            method: "POST",
            headers: {
            ...headers,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ query, maxResults }),
        })
            .then((res) => res.json())
            .then((data) => data.books)

    return (<BookContext.Provider value={{ search , handlePost , setCurrent , deleted  , read , want , current }}>
                {children}
            </BookContext.Provider>)
}
export default BookContext