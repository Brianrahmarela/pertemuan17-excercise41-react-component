// import React from 'react';

function ProductItem(props) {
    return(
        <>
        <p className="product">
            {props.id}
            {props.name}
            
        </p>
        </>
    )
}


export default ProductItem;
