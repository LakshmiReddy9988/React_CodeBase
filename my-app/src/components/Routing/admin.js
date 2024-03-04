import { useLocation, useParams } from "react-router-dom"

export default function Admin() {

    let { id, name } = useParams();
    let queryParams = useLocation();
    let qParams = new URLSearchParams(queryParams.search);
    let category = qParams.get('category');
    let posts = qParams.get('posts');

    return(
        <>
            <h1>Admin ID: {id} </h1>
            <h1>Admin Name: {name} </h1>
            <h1>Category: {category} </h1>
            <h1>Posts: {posts} </h1>
        </>
    )
}