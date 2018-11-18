import React from 'react';
import '../../assets/icon.css';
import './header.css';
export default class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            sort : "Most stars"
        }     
    }
    render () {
        return (
            <div className="github-header-box">
                <span className="iconfont icon-liebiao" onClick={this.props.onShowLeftAside}></span>
                <h1 className="github-header">Github编程语言排行榜</h1>
                <div onClick={this.props.onShowRightAside}>
                    <span className="github-rank-type">{this.state.sort}</span>
                    <span className="iconfont icon-paixu"></span>
                </div>
            </div>
        )
    }    
}


