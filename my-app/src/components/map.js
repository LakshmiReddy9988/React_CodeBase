export default function Map(props) {
    console.log(props)
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

    function displayMessage() {
        alert('message displayed')
    }

    function displayText(e) {
        alert(e)
    }

    //Map can be used inside JSX expression
    //Key property is mandatory when using Map in React and key should be unique

    return (
        <>
        {/* Props Children data is the data between the tags where it is called */}
        <div style={{display: 'flex', gap: 20, marginTop: 20}}>
            {props.children}
        </div>
        {
            users.map(u => {
                return <ul key={u.id}>
                    <li><strong>UserName:</strong> {u.name}</li>
                    <li><strong>Place: </strong>{u.place}</li>
                </ul>
            })
        }
        <div style={{display: 'flex', gap: 10}}>
            {/* () => Use callback when you want to pass arguments to the event handler function otherwise
                it will invoke the function immediately */}
            <button onClick={() => alert('clicked')}>Click1</button>
            <button onClick={displayMessage}>Click2</button>
            <input type='text' onKeyUp={() => displayText('input changed')} />
        </div>
        </>
    )
}