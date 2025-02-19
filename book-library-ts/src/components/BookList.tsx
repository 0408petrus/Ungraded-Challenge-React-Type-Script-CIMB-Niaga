import React from "react"
import books from "./BookItem";
import Button from "./Button";

const BookList: React.FC = () => {
    return (
<>
<div className="container mt-4">
        <h3 className="text-center mb-3">Programming Book List</h3>
        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="card">
          <img src={book.imageUrl} className="card-img-top" alt={book.title} />
          <div className="card-body">
            <h5 className="card-title"><strong>{book.title}</strong></h5>
            <p className="card-text">{book.author}</p>
            <Button/>
          </div>
              </div>
            </div>
          ))}
        </div>
      </div>
</>
    )
}

export default BookList;