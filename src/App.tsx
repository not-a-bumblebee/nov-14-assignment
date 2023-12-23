import { useEffect, useState } from 'react'
import './App.css'
import BookList from './Components/BookList'
import AddBookForm from './Components/AddBookForm'

interface ApiStuff {
  id: string,
  name: string
}

function App() {
  const [books, setBooks] = useState<ApiStuff[]>([])

  console.log(books);

  const init = async () => {
    let stuff = await (await fetch("https://65864c95468ef171392e200c.mockapi.io/books")).json()
    console.log(typeof stuff);
    if(!(typeof stuff ==="string")){
      
      
      console.log(books);
      setBooks(stuff);
    }


  }

  useEffect(() => {
    init()



  }, [])


  return (
    <>
      <h1>Favorite Books</h1>
      <p>A thing to list your favorite books!</p>
      <AddBookForm setBooks={setBooks} books={books} />
      {books &&
        <BookList library={books} setBooks={setBooks} />
      }

    </>
  )
}

export default App
