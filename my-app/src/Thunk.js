import { useDispatch, useSelector } from "react-redux";
/**
 * Redux Thunk is a library installed using the command "npm install redux-thunk"
 * Thunk is used to make an API call before dispatch an action in store
 * We need to pass a function inside the dispatch event and that function gets two arguments
 * One is dispatch and another is getState(contains state data)
 */

function Thunk() {
  const dispatch = useDispatch();

  let data = useSelector((state) => state?.userData);
  console.log(data)

  async function fetchData(dispatch, getState) {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    let data = await res.json();
    console.log(getState())
    dispatch({type: 'add', payload: data})
  }

  return (
    <>
      <button className="btn btn-primary m-3" onClick={() => dispatch(fetchData)}>Get Data</button>
      <h1>Redux Thunk Demo</h1>
      <div>
        Id: {data?.id} <br/>
        Name: {data?.name} <br/>
        Mobile: {data?.phone}
      </div>

    </>
  );
}

export default Thunk;
