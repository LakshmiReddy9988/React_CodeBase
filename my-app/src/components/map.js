export default function Map() {
    let users = [
        {
            id: 1,
            name: 'John',
            place: 'Hyderabad'
        },
        {
            id: 2,
            name: 'Wick',
            place: 'Bangalore'
        }
    ];

    //Map can be used inside JSX expression
    //Key property is mandatory when using Map in React and key should be unique

    return (
        <>
        {
            users.map(u => {
                return <ul key={u.id}>
                    <li><strong>UserName:</strong> {u.name}</li>
                    <li><strong>Place: </strong>{u.place}</li>
                </ul>
            })
        }
        </>
    )
}