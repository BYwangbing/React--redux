import React, {Component} from 'react'

export default class News extends Component{
    constructor() {
        super();
        this.state = {
            newsArr: ['news001', 'news002', 'news003']
        }
    }
    render() {
        return <div>
            <ul>
                {this.state.newsArr.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    }
}

