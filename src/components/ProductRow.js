import React from "react"

let ProductRow = (props) => {   
    return (
      <tbody>             
        <tr>
          {props.rowName === "product" && <td><input type="checkbox" id={props.product.id} name={props.product.name} onChange={(e) => props.onOrder(e, props.product.id)} /></td>}     
          <td>{props.product.name}</td>               
          <td><i className="fa fa-usd"></i>{props.product.price}</td>
          {props.rowName === "cart" && <td><i className="fa fa-shopping-basket"></i></td>}
        </tr>
      </tbody>      
    );  
}

ProductRow.propTypes = {  
  rowName: React.PropTypes.string.isRequired,    
  product: React.PropTypes.object.isRequired
}

export default ProductRow