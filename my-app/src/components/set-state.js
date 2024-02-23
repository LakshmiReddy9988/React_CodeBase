import React from 'react';
export default class SetState extends React.Component {
    /**
     * We need to store data under 'state' object and call setState() to update data by passing the values which we need to update
     * setState is used to update the data dynamically(rerender) in UI for Class components
     * setState is asynchronous function, so if we want to do some action after updating state then we have to write the logic inside callback function of setState
     * In constructor we have to call the function with bind using this reference so that it will not throw error while calling setState
     */
    state = {
        product: 'Realme 12 Pro',
        price: 20000
    }
    constructor(){
        super();
        this.updatePrice = this.updatePrice.bind(this);
    }
    render(){
        return (
            <>
                <h1>Product : {this.state.product}</h1>
                <h1>Price : {this.state.price}</h1>
                <input type='number' id='price' />
                <button onClick={this.updatePrice}>Update</button>
            </>
        )
    }

    updatePrice(){
        let p = document.getElementById('price').value;
        this.setState({
            price: p
        }, () => {
            console.log(this.state.price)
        })
    }
}