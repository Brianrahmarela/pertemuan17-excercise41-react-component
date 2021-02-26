import { useState } from "react";
import ProductItem from './ProductItem';

function ListProduct() {
  const [produk] = useState([
    { 
      id: 1,
      name: "laptop",
    },
    {
      id: 2,
      name: "mouse",
    },
    {
      id: 3,
      name: "shoes",
    },
    {
      id: 4,
      name: "car",
    },
  ]);

  return (
          <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
            <h2 >Exercise - Project component list product</h2>
            <h4>Hasil:</h4>
              {produk.map(item => {
                // console.log(item);
                //tanpa komponen dari ProductItem.js
                // return <p key={item.id}>{item.name}</p>
                
                return <ProductItem id={"produk "+ item.id+': '} name={item.name}/>
              })}
          </div>

  );
}

export default ListProduct;