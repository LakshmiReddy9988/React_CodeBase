import PropTypes from 'prop-types';

function PropTypesInReact() {
    return(
        <>
        <h1>This is Parent Component</h1>
        <User name='Reddy' age={23} />
        </>
    )
}

function User(props) {
    return(
        <>
        <h1>This is Child Component</h1>
        <h1>Hello {props.name}!</h1>
        <h1>Age {props.age} </h1>
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired, //name should be string and it must be send from parent with some value
    age: PropTypes.number //age should be number
}

User.defaultProps = {
    name: 'John'
}

export default PropTypesInReact