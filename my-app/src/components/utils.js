import { useEffect, useState } from "react";

function GetAPIData(url) {
    let [data, setProducts] = useState({});
    console.log(url, 'url')

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        let res = await fetch(url);
        let data = await res.json();
        setProducts(data);
    }

    return data;
}

export default GetAPIData;