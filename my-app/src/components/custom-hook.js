import GetAPIData from "./utils";

function CustomHook() {
    let product = GetAPIData('https://fakestoreapi.com/products/1');

    return(
        <>
            <h1>Custom Hook Demo</h1>
            <h1>Title: {product?.title}</h1>
            <h1>Price: {product?.price}</h1>
        </>
    )
}

export default CustomHook