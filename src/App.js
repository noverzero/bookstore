import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import BooksListComponent from './components/BooksListComponent'
import CartComponent from './components/CartComponent'
import FooterComponent from './components/FooterComponent'



class App extends Component {

  state = {
    allBooks: [],
    cartBooks: [
      {author: "Frank Herbert", description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.", id: 1, inCart: false, pages: 472, price: 19.99, published: "2014-12-14T00:00:00.000Z", publisher: "No Starch Press", subtitle: "A Modern Introduction to Programming", title: "God Emperor of Dune", website: "http://eloquentjavascript.net/", quantity: 1},

      {author: "Tom Robbins", description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.", id: 2, inCart: false, pages: 472, price: 12.99, published: "2014-12-14T00:00:00.000Z", publisher: "No Starch Press", subtitle: "A Modern Introduction to Programming", title: "Still Life With Woodpecker", website: "http://eloquentjavascript.net/", quantity: 1},

      {author: "Ken Kesey", description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.", id: 3, inCart: false, pages: 472, price: 17.99, published: "2014-12-14T00:00:00.000Z", publisher: "No Starch Press", subtitle: "A Modern Introduction to Programming", title: "Sometimes a Great Notion", website: "http://eloquentjavascript.net/", quantity: 1}
    ],
    newOrder: {}
}

async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/books')
  const json = await response.json()
  console.log("your data, sir.....", json)
  this.setState({allBooks: json})
}

addItemToState = (completedOrder)=> {
  console.log("completedOrder:::::", completedOrder)
  let bookToAdd = this.state.allBooks.find(book => book.id == 5)
  let myOrder = {
    id: this.state.cartBooks.length + 1,
    title: "title",
    author: "author",
    price: 10,
    quantity: 5
  }
  this.setState({cartBooks:[...this.state.cartBooks, myOrder] })
}

handleClick = (e) =>{
  e.preventDefault()
  let completedOrder = this.state.newOrder
  this.addItemToState(completedOrder)
}


  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <div className="row">
          <div className="col-8">
            <div>
              <BooksListComponent allBooks={this.state.allBooks} handleClick={this.handleClick} newOrder={this.state.newOrder}/>
            </div>
          </div>
          <div className="col-4">
            <CartComponent cartBooks={this.state.cartBooks} />
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
