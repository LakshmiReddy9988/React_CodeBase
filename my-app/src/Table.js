function Table(props) {
    return(
        <table className="table m-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map(
                        (product)=> (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>
                                    <button className="btn btn-primary m-1" onClick={
                                        ()=> props.edit(product)
                                    }>Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger m-1" onClick={
                                        ()=> props.delete(product.id)
                                    }>Delete</button>
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default Table