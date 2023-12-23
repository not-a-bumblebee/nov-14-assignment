import { useState } from 'react'
import './App.css'
import BookList from './Components/BookList'
import AddBookForm from './Components/AddBookForm'

function App() {
  const [books, setBooks] = useState<string[]>([])

  console.log(books);
  

  return (
    <>
      <h1>Favorite Books</h1>
      <p>A thing to list your favorite books!</p>
      <AddBookForm setBooks={setBooks} books={books} />
      <BookList library={books} setBooks={setBooks}/>

    </>
  )
}

export default App
