interface BookListProps{
    library:string[],
    setBooks:React.Dispatch<React.SetStateAction<string[]>>
}
export default function BookList({library,setBooks}:BookListProps) {

    const deleteBook = (index:number)=>{
        setBooks(x=>{
            let update = [...x]
            update.splice(index,1);
            return [...update]
        })
    }

    const Book: React.FC<{ bookName: string,index:number }> = ({bookName,index}) =>{
        return (
            <div className="book">
                <p>{bookName}</p>
                <a className="delete" onClick={()=>deleteBook(index)}>X</a>
            </div>
        )
    }

    return(
        <>
        {library.map((x,i)=>{
            return(<Book bookName={x} key={x} index={i} />)
        })}
        </>
    )
}