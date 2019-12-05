import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    };

    increment = () => {
        const num = this.refs.numSelect.value * 1;
        this.props.increment(num);
    };

    decrement = () => {
        const num = this.refs.numSelect.value * 1;
        this.props.decrement(num);
    };

    incrementIfOdd = () => {
        let count = this.props.count;
        const num = this.refs.numSelect.value * 1;
        if (count % 2 === 1) {
            this.props.increment(num);
        }
    };

    incrementAsync = () => {
        const num = this.refs.numSelect.value * 1;
        setTimeout(() =>
                this.props.increment(num),
            1000);
    };

    render() {
        const {count} = this.props;
        return <div>
            <p>click {count} times</p>
            <div>
                {'  '}
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


