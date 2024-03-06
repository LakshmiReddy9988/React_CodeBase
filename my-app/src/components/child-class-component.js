import { Component } from "react";

export default class ChildClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.data+10,
            product: 'Dummy'
        }
        console.log('Inside constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Inside getDevierStateFromProps');
        return {
            ...state, count: props.data+10
        }
    }

    /**
     * render() should call for every update in the component 
     * @returns 
     */
    render() {
        console.log('Inside render')
        return(
            <>
            <h2>This is child component</h2>
            <h2>Props: {this.props.data}</h2>
            <h2>Count: {this.state.count}</h2>
            <h2>Product Name: {this.state.product}</h2>
            </>
        )
    }

    /**
     * Used to make API calls in class components
     */
    componentDidMount() {
        console.log('Inside componentDidMount')
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>this.setState({
                ...this.setState, product:json.title
            }))
    }

    /**
     * Decides whether the component should rerender or not
     * By default it should return true
     * @returns boolean
     */
    shouldComponentUpdate() {
        console.log('Inside shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate){
        console.log('Inside getSnapShotBeforeUpdate')
        return null;
    }

    /**
     * Used to make API calls whenever component updates
     */
    componentDidUpdate(){
        console.log('Inside componentDidUpdate')
    }

    /**
     * Used to perform some task before destroying the component from DOM
     */
    componentWillUnmount(){
        console.log('Inside componentwillUnmount')
    }

}