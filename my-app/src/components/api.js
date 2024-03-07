import { useEffect } from "react";
import axios from "axios";

function ApiIntegration() {

    let api = axios.create({
        baseURL: 'https://fakestoreapi.com'
    });

    useEffect(
        ()=>{
            postProducts()  
        }, []
    )

    async function postProducts(){
        // let res = await fetch('https://fakestoreapi.com/products', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         title: 'Test Product',
        //         price: 13.5,
        //         description: 'lorem ipsum set',
        //         image: 'https://i.pravatar.cc',
        //         category: 'mobiles'
        //     })
        // });
        // let data = await res.json();

        // let res = await axios.post('https://fakestoreapi.com/products', {
        //     title: 'Test Product',
        //     price: 13.5,
        //     description: 'lorem ipsum set',
        //     image: 'https://i.pravatar.cc',
        //     category: 'mobiles'
        // });

        let getRes = await api.get('/products');
        let postRes = await api.post('/products', {
            title: 'Test Product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'mobiles'
        }) 
        console.log(getRes.data);
        console.log(postRes.data)
    }

    return(
        <>
        <h1>API Integration in React</h1>
        </>
    )
}

export default ApiIntegration