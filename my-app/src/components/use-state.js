import React, {useState} from 'react'
export default function UseState() {
    /**
     * useState is a named function available in react library
     * useState is used to update the data dynamically(rerendering) in UI for functional components
     * useState returns an array and we can get it using destructuring concept
     * To update data we need to call callBack function of useState and update the data
     */
    let [product, updateProduct] = useState({
        name: 'Realme 12 Pro',
        price: 20000,
        brand: 'Realme'
    });
    
    function updatePrice() {
        let price = document.getElementById('price').value;
        let name = document.getElementById('name').value;
        updateProduct({
            ...product,
            price: price,
            name: name
        })
        // console.log(product)
    }
    return (
        <React.Fragment>
           <h1>Product : {product.name}</h1>
            <h1>Price : {product.price}</h1>
            <h1>Brand : {product.brand}</h1>
            <input type='text' id='name' placeholder='Enter a Product'/><br/>
            <input type='number' id='price' placeholder='Enter the amount' /><br/>
            <button onClick={updatePrice}>Update</button>
        </React.Fragment>
    )
}