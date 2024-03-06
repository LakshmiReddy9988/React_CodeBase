import React, { Component } from 'react';
import ChildClass from './child-class-component';

export default class LifeCycle extends Component {

    constructor(props) {
        super();
        this.state = {
            x: 10,
            show: true
        }
    }

    render(){
        return(
            <>
            <h1>Class Component Life Cycle Methods</h1>
            <h2>Parent Component</h2>
            {this.state.show && <ChildClass data={this.state.x} />}

            <button onClick={() => this.setState({show: false})}>Hide</button>
            <button onClick={() => this.setState({show: true})}>Show</button>

            {/* <h1>{this.state.x}</h1> */}
            <button onClick={
                () => {
                    this.setState({x: this.state.x+10})
                }
            }>Click</button>
            </>
        )
    }
}