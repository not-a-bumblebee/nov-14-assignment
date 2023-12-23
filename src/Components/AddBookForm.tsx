import { useRef } from "react";

interface AddBookFormProps {
    setBooks: React.Dispatch<React.SetStateAction<string[]>>,
    books: string[]
}

export default function AddBookForm({ setBooks, books }: AddBookFormProps) {

    let inputRef = useRef(null)

    const addBook = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        let name = inputRef.current.value;
        if (name.trim()) {
            //add book if its new.
            if (!books.find(x => x == name)) {
                setBooks(x => [...x, name])
            }


            console.log(event);


        }
    inputRef.current.value = "";
    }


    return (
        <form onSubmit={addBook}>
            <input type="text" placeholder="Book title" required ref={inputRef} />
            <button>Add Book</button>
        </form>
    )
}