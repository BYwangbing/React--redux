import React, {Component} from 'react'
const messageDetails = [
    {id: 1, title: '无羁', content: '煮一壶生死悲欢祭少年郎'},
    {id: 3, title: '红玫瑰', content: '得不到的永远在骚动，被偏爱的都有恃无恐'},
    {id: 6, title: 'Message006', content: '繁华的都市应有尽有，而你只有背影'},
];

export default class MessageDetail extends Component{
    constructor() {
        super();
    }

    render() {
        const id = this.props.match.params.id;
        const md = messageDetails.find(md => md.id===id*1);
        return <div>
            <ul>
                <li>ID: {md.id}</li>
                <li>Title: {md.title}</li>
                <li>Content: {md.content}</li>
            </ul>
        </div>
    }
}
