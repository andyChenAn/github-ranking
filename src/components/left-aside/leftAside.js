import React from 'react';
import './leftAside.css';
import axios from 'axios';
export default class LeftAside extends React.Component {
    constructor (props) {
        super(props);
    }
    getData (e) {
        let lang = e.target.getAttribute('data-lang');
        this.props.onLeftAsideClose();
        axios.get(`https://api.github.com/search/repositories?q=language:${lang}&sort=stars`)
        .then(res => {
            this.props.onHandleRankData(res.data.items);
        })
        .catch(err => {
            console.log(err);
        })
    }
    render () {
        let langs = ['JavaScript' , 'HTML' , 'CSS' , 'PHP' , 'Java' , 'Ruby' , 'CoffeeScript' , 'Python' , 'TypeScript' , 'C#'];
        let list = langs.map(item => {
            return <li key={item} data-lang={item.toLowerCase()} onClick={e => this.getData(e)}>{item}</li>
        })
        return (
            <div className="left-aside-box">
                <div className="left-aside-content">
                    <div className="left-aside-title">编程语言</div>
                    <ul className="left-aside-list">
                        {list}
                    </ul>
                </div>
                <div className="left-aside-mask" onClick={() => this.props.onLeftAsideClose('aside')}></div>
            </div>
        )
    }
}