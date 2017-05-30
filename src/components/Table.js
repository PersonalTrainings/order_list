import React from "react";

const Table = (props) => {  
  let rowStyle = "fa ";     
  rowStyle += props.title === "products" ? "fa-shopping-cart" : "fa-cart-arrow-down";
  return (    
    <div>
        <h2 className="text-center">{props.title} <i className={rowStyle}></i></h2>
        <table className="table table-striped">
          <thead>
            <tr>
              {props.title === "products" && <th><i className="fa fa-check"></i></th>}              
              <th>Product</th>
              <th>Price</th>            
            </tr>
          </thead>          
            {props.children}          
        </table>
      </div>
  )
}

Table.propTypes = {
  title: React.PropTypes.string.isRequired  
}

export default Table;