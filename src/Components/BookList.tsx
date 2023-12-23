interface BookListProps{
    library:string[]
}
export default function BookList({library}:BookListProps) {

    const Book: React.FC<{ bookName: string }> = ({bookName}) =>{
        return (
            <div className="book">
                <p>{bookName}</p>
                <a className="delete">X</a>
            </div>
        )
    }

    return(
        <>
        {library.map(x=>{
            return(<Book bookName={x} key={x} />)
        })}
        </>
    )
}