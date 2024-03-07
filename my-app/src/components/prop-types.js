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
    name: 'John' //If name is not sent from parent then this default value should be considered
}

export default PropTypesInReact

/**
 * JSX Rules
 * 1. Functional component name should start with Upper Case
 * 2. Return only Single element/component, if we want to display multiple elements/components then enclose everything in one tag
 * 3. Closing tag is must
 * 4. camelCase for css properties, events & attributes. Eg: className, marginTop, onClick, htmlFor etc.
 * 5. Do not use JavaScript keywords for attributes. Eg: class, for etc.
 */