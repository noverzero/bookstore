import React from 'react'

const CartComponent = (props) => {

  return (

    <div className=" list-group my-3">
      <div className="header row bg-secondary shadow border border-success rounded-top text-white p-4 mt-2 mx-1">
        My Cart
      </div>


      <div className="list-group-item bg-light shadow border border-success rounded-bottom text-success mx-1">
        <div className="row border-bottom border-success">
          <div className="col-md-4 px-1">Title</div>
          <div className="col-md-4 px-1">QTY</div>
          <div className="col-md-4 px-1">Price</div>
        </div>
        {props.cartBooks.map(book => <div className="row mx-2 py-2 border-bottom border-success"
                  key={book.id}>
                  <div className="col-md-4 px-1">{book.title}</div>
                  <div className="col-md-4 px-1">{book.quantity}</div>
                  <div className="col-md-4 px-1">{book.price}</div>
                </div>)}
        <div className="row">
          <div className="col-md-6 my-2">
          Total: ${(props.cartBooks.reduce((result, book) => {
           return result + (book.price * book.quantity)
         },0)).toFixed(2)}
          </div>
          <div className="col-md-6 my-2 offset-6">
            <button type="button" className="btn btn-secondary">Checkout</button>
          </div>
        </div>
      </div>




    </div>


  )

}
export default CartComponent
