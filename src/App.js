import React, { Component } from 'react';
import Box from "./components/Box";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleOrder = this.handleOrder.bind(this);
    this.state = { orders: [] }
  }
  componentWillMount() {
    fetch('https://api.myjson.com/bins/1eo2dr').then(response => response.json())
                                               .then(obj => this.setState({orders: obj.orders}))
                                               .catch(err => console.warn("Error in request", err));
  }
  handleOrder(isOrdered, id) {    
    let newOrders = this.state.orders.map(product => {
      if (id === product.id) {
        product.isOrdered = isOrdered;
      }
      return product;
    })
    this.setState({ orders: newOrders})   
  }  
  render() {          
    let orders = this.state.orders;        
    return (
      <Box>
        <ProductList 
          orders={orders}          
          onOrder={this.handleOrder} />
        <CartList 
          orders={orders} />
      </Box>
    );
  }
}

export default App;
