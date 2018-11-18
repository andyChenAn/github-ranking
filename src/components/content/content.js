import React from 'react';
import './content.css';
export default class Content extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        let list = this.props.data.map((item , index) => {
            return <li key={index.toString()} className="rank-list">
                <div className="list-name">{item.full_name}</div>
                <div className="list-description">{item.description}</div>
                <div className="list-language">{item.language}</div>
                <div className="list-date">update_time：{new Date(item.updated_at).toLocaleDateString()}</div>
            </li>;
        });
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}