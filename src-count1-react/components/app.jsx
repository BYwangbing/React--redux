import React, {Component} from 'react'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment = () => {
        const num = this.refs.numSelect.value * 1;
        const count = this.state.count + num;
        this.setState({
            count
        })
    };

    decrement = () => {
        const num = this.refs.numSelect.value * 1;
        const count = this.state.count - num;
        this.setState({
            count
        })
    };

    incrementIfOdd = () => {
        let count = this.state.count;
        const num = this.refs.numSelect.value * 1;
        if (num % 2 === 1) {
            count += num;
            this.setState({count});
        }
    };

    incrementAsync = () => {
        const num = this.refs.numSelect.value * 1;
        const count = this.state.count + num;
        setTimeout(() => this.setState({count}), 1000);
    };

    render() {
        const {count} = this.state;
        return <div>
            <p>click {count} times</p>
            <div>
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

