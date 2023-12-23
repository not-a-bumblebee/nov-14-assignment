import { useState } from 'react'
import './App.css'
import BookList from './Components/BookList'
import AddBookForm from './Components/AddBookForm'

function App() {
  const [books, setBooks] = useState( ["Twilight", "Twilight: new moon", "Twilight: eclipse"])


  return (
    <>
      <h1>Favorite Books</h1>
      <p>A thing to list your favorite books!</p>
      <AddBookForm/>
      <BookList library={books}/>
        
    </>
  )
}

export default App
