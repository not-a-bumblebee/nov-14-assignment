import './App.css'
import BookList from './Components/BookList'

function App() {
const books = ["Twilight", "Twilight: new moon", "Twilight: eclipse"]

  return (
    <>
      <h1>Favorite Books</h1>
      <p>A thing to list your favorite books!</p>
      <BookList library={books}/>
        
    </>
  )
}

export default App
