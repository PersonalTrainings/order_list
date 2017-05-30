import React from "react"
import Table from "./Table"
import ProductRow from "./ProductRow"

let CartList = (props) => { 
    // props.orders.forEach(product => {
    //   if (!product.orderedBy) {
    //     return;
    //   }
    //   rows.push(<ProductRow product={product} key={product.name} tableChild={state.tableChild} />)                
    // })
    let rows = props.orders.filter(product => product.isOrdered)
                           .map(product => <ProductRow product={product} key={product.name} rowName="cart" />)
    return (  
      <Table title="cart">
        {rows}
      </Table>
    )  
}

CartList.propTypes = {
    orders: React.PropTypes.array.isRequired    
}

export default CartList