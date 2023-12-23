export default function BookList() {

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
        <Book bookName="Harry Potter 1"/>
        <Book bookName="Harry Potter 2"/>
        <Book bookName="Harry Potter 3"/>
        </>
    )
}