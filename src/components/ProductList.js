import React, {Component} from "react"
import Table from "./Table"
import ProductRow from "./ProductRow"

class ProductList extends Component {
  constructor() {
    super();
    this.handleOrder = this.handleOrder.bind(this);       
  }
  handleOrder(e, id) {
    this.props.onOrder(e.target.checked, id);
  }
  render() {
    let rows = this.props.orders.map(product => <ProductRow product={product}  key={product.name} onOrder={this.handleOrder} rowName="product" />)    
    return (        
      <Table title="products">          
          {rows}
      </Table>
    )
  }
}

ProductList.propTypes = {
    orders: React.PropTypes.array.isRequired,
    onOrder: React.PropTypes.func.isRequired
}

export default ProductList