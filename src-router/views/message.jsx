import React from 'react'
import {Route, Link} from 'react-router-dom'
import MessageDetail from './message-detail'
export default class message extends React.Component{
    constructor() {
        super();
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const data = [
                {id: 1, title: 'Message001'},
                {id: 3, title: 'Message003'},
                {id: 6, title: 'Message006'},
            ];
            this.setState({
                messages: data
            })
        }, 1000)
    }
    ShowDetail = (id) => {
        this.props.history.push(`/home/message/${id}`)
    };

    _ShowDetail = (id) => {
        this.props.history.replace(`/home/message/${id}`)
    };

    back = () => {
        this.props.history.goBack();
    };

    forward = () => {
        this.props.history.goForward();
    };

    render() {
        const path = this.props.match.path;
        console.log(path);
        return <div>
            <ul>
                {
                    this.state.messages.map((item) =>
                        <li key={item.id} style={{padding: '12px 0'}}>
                            <Link to={`${path}/${item.id}`}>
                                {item.title}
                                &emsp;&emsp;<button onClick={() => this.ShowDetail(item.id)}>push查看</button>
                                &emsp;&emsp;<button onClick={() => this._ShowDetail(item.id)}>replace查看</button>
                            </Link>
                        </li>
                    )
                }
            </ul>
            <p>
                <button onClick={this.back}>返回</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
            </p>
            <Route path={`${path}/:id`} component={MessageDetail}/>
        </div>
    }
}

