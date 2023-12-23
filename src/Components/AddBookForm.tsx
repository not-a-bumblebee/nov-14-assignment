import { useRef } from "react";

export default function AddBookForm() {

    let inputRef = useRef(null)

    const addBook = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(event);

        
        
    }

    return(
        <form onSubmit={addBook}>
            <input type="text"  placeholder="Book title" required ref={inputRef}/>
            <button>Add Book</button>
        </form>
    )
}