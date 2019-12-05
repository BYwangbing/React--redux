import React, {Component} from 'react'
import * as action from  '../redux/actions'

export default class App extends Component {
    constructor() {
        super();
    }

    increment = () => {
        const num = this.refs.numSelect.value * 1;
        this.props.store.dispatch(action.increment(num))
    };

    decrement = () => {
        const num = this.refs.numSelect.value * 1;
        this.props.store.dispatch(action.decrement(num))
    };

    incrementIfOdd = () => {
        let count = this.props.store.getState();
        const num = this.refs.numSelect.value * 1;
        if (count % 2 === 1) {
            this.props.store.dispatch(action.increment(num))
        }
    };

    incrementAsync = () => {
        const num = this.refs.numSelect.value * 1;
        setTimeout(() =>
            this.props.store.dispatch(action.increment(num)),
            1000);
    };

    render() {
        const count = this.props.store.getState();
        return <div>
            <p>click {count} times</p>
            <div>
                &emsp;&emsp;
                <select name="" id="" ref="numSelect">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select> &emsp;
                <button onClick={this.increment}>+</button>
                &emsp;
                <button onClick={this.decrement}>-</button>
                &emsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>
                &emsp;
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        </div>
    }
}

