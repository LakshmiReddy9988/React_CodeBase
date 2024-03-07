function AuthCheck(Component) {
  let authenticated = false;

  return (props) => {
    if (authenticated) {
      return <Component {...props} />;
    }
    return <Login {...props} />;
  };
}

function User(props) {
  return(
    <>
    <h1>This is User Component</h1>
    <h1>Hello {props.userName}!</h1>
    </>
  );
}

function Login(props) {
  return(
    <>
    <h1>This is Login Component</h1>
    <h1>{props.userName} Please Login</h1>
    </>
  )
}

const WrappedComponent = AuthCheck(User);

function HigherOrderComponent() {
    return <WrappedComponent userName='John' />
}

export default HigherOrderComponent;

/**
 * Higher Order Components takes another component as input and returns a new component with extra features added to original component
 * Higher Order Components must return a function 
 */
