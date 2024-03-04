import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import './products.css';

function Products() {

    const [products, updateProducts] = useState([]);

    /**
     * useEffect hook will be triggered after component rendered
     * If dependencies not provided, then it will trigger everytime when the component rerenders
     * If dependencies are empty array, then it will trigger only when the component renders first time
     * If we provide dependencies, then it will trigger every time when the dependency variable updates
     */
    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        let res = await fetch('https://fakestoreapi.com/products');
        let productsList = await res.json();
        updateProducts(productsList);
    }

    if(products.length == 0){
        return(
            <h1>Fetching data...</h1>
        )
    }

    return(
        <>
            <div className="product-list">
              {
                products.map((p) => <ProductCard key={p.id} {...p}></ProductCard>)
              }
            </div>
        </>
    )
}

export default Products