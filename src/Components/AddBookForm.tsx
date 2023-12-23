import { useRef } from "react";
interface ApiStuff {
    id: string,
    name: string
}
interface AddBookFormProps {
    setBooks: React.Dispatch<React.SetStateAction<ApiStuff[]>>,
    books: ApiStuff[]
}

export default function AddBookForm({ setBooks, books }: AddBookFormProps) {

    let inputRef = useRef(null)

    const addBook = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        let name = inputRef.current.value;
        if (name.trim()) {
            //add book if its new.
            if (!books.find(x => x.name == name)) {
                let stuff = await (await fetch("https://65864c95468ef171392e200c.mockapi.io/books", { method: 'POST', headers: { 'Content-Type': 'application/json' },body:JSON.stringify({name:name.trim()}) })).json()
                setBooks(x => [...x, stuff])
                console.log(typeof stuff);
                

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