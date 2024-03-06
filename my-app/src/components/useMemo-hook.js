import { useEffect, useMemo, useState } from "react"
import './useMemo-hook.css';

function UseMemoHook() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    
    const [products, setProducts] = useState(
        [
            { id: 1, name: 'One Plus Nord CE2', price: 20000 },
            { id: 2, name: 'Oppo F21 S', price: 22000 },
            { id: 3, name: 'Samsung Galaxy S21 FE', price: 17000 }
        ]
    );

    const [searchText, updateSearchText] = useState('');
    
    /**
     * useMemo hook is used for memorization i.e.,
     * instead of executing code multiple times it will call only when particular variabled updated
     * This will not render the DOM multiple times
     */
    const filteredProducts = useMemo(() => {
      console.log(products)
      return products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }, [products, searchText]);

    useEffect(
        ()=> {
            setInterval(
                ()=> {
                    setTime(new Date().toLocaleTimeString());
                }, 1000
            )
        }, []
    )

    return(
        <>
            <div>{time}</div>

            <input type='text' value={searchText} onChange={
                (e) => {
                    updateSearchText(e.target.value)
                }
            } />

            <table>
                <tr>
                    <td>S.NO</td>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                {
                    filteredProducts.map(
                        p=> {
                          return <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                          </tr>
                        }
                    )
                }
            </table>
        </>
    )
}

export default UseMemoHook