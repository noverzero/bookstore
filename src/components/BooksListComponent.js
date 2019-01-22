
import React from 'react'
import SearchComponent from './SearchComponent'

const BooksListComponent = (props) => {
//console.log('this is what this is::::', props.handleClick)

  return (
    <div className="container border border-success rounded p-3 ml-3 my-4 shadow">
      <div className="row">
        <div className="col-md-6 py-4">
          <h5 className="header text-success">Shop The Collection</h5>
        </div>
        <div className="col-md-6">
          <SearchComponent />
        </div>
      </div>

    <form>
      <div className="list-group border rounded pb-4">
        <div className="list-group-item bg-success text-white">
          <div className="row">
            <div className="col-md-5 px-2">Title</div>
            <div className="col-md-3 border-left px-2">Author</div>
            <div className="col-md-2 border-left px-2">Price</div>
            <div className="col-md-2 border-left px-2">Quantity</div>
          </div>
        </div>
        {props.allBooks.map((book) => <div className="row mx-2 py-2 border-bottom border-success text-success"
                  key={book.id}>
                  <div className="col-md-5 px-2">{book.title}</div>
                  <div className="col-md-3 px-2">{book.author}</div>
                  <div className="col-md-2">${book.price.toFixed(2)}</div>
                  <div className="col-md-2">

                    <div className="form-group">
                      <label htmlFor="qty"></label>
                      <input
                        type="number"
                        onChange={ (e) => {
                          let newOrderId = e.target.id
                          let newOrderQuantity = e.target.value
                          props.newOrder[e.target.id] = newOrderQuantity
                          console.log("NEWWORLDORDER::: ", props.newOrder)
                        } }
                        className="form-control" id={book.id}
                        name={`bookId-${book.id}`}
                        aria-describedby="addQuantity"
                        placeholder="0"
                      />
                    </div>

                  </div>
                </div>)}
      </div>

      <div className="row">
        <div className="col-md-9 py-4">
        </div>
        <div className="col-md-3 offset-9">
          <button onClick={props.handleClick} type="submit" className="btn btn-secondary">Add to Cart</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default BooksListComponent
