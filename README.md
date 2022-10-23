## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

### Installation:

`npm install`

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000` 

## Instructions

u need to add your books first so u can see some books being added to your shelfs.
to find a specific book u can search for it by clicking on the plus icon on the bottom-right sector of the main page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Added functions 
u can find additional functions being added to the bookAPI.js file:

- [`handlePost`](#handlepost)
- [`deleted`](#deleted)

### `handlePost`

Method Signature:

```js
handlePost(item, bookshelf, disabled);
```

-item: `<Object>`
-bookshelf: `<String>`
-disabled: `<String>`
-Posting data to the back-end server and modifying the ui
-item refers to the book object, bookshelf stands for the shelf where u want to put the book, disabled refers to where did u picked the book up from

### `deleted`

Method Signature:

```js
deleted(book, disabled);
```

-bookshelf: `<String>`
-disabled: `<String>`
-delete the book data from the server and move it out of the shelf that was containing it
-item refers to the book object, disabled refers to where did u picked the book up from

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

## What You're Getting (updated)

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── components 
    │   ├── shared
    │   │    └──book.jsx # Functional component for each book 
    │   ├── CurrentlyReading.jsx # Functional component contains all the books in that shelf
    │   ├── Done.jsx # Functional component contains all the books in the read shelf
    │   └── WantToRead.jsx # Functional component contains all the books in the want-to-read shelf
    │   └── WantToRead.jsx # Functional component contains all the books in the want-to-read shelf
    ├── context
    │   └── BookContext.jsx # Context component provides the global states and functions
    ├── pages
    │   └── Search.jsx # get routed from the main page to this component to search for books 
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```