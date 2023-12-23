interface BookListProps{
    library:ApiStuff[],
    setBooks:React.Dispatch<React.SetStateAction<ApiStuff[]>>
}
interface ApiStuff{
    id:string,
    name:string
  }
export default function BookList({library,setBooks}:BookListProps) {

    const deleteBook = async (index:number,id:string)=>{
        setBooks(x=>{
            let update = [...x]
            update.splice(index,1);
            return [...update]
        })
        let stuff = await (await fetch("https://65864c95468ef171392e200c.mockapi.io/books/"+id,{method:"DELETE"})).json()

    }

    const Book: React.FC<{ bookName: string,index:number,id:string }> = ({bookName,index,id}) =>{
        return (
            <div className="book">
                <p>{bookName}</p>
                <a className="delete" onClick={()=>deleteBook(index,id)}>X</a>
            </div>
        )
    }

    return(
        <>
        {library.map((x,i)=>{
            return(<Book bookName={x.name} key={x.name} index={i} id={x.id} />)
        })}
        </>
    )
}