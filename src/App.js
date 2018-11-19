import React, { Component } from 'react';
import Header from './components/header/header';
import LeftAside from './components/left-aside/leftAside';
import Content from './components/content/content';
import Loading from './components/loading/loading';
import axios from 'axios';
import { CSSTransitionGroup } from 'react-transition-group';
export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLeft : false,
            loaded : false,
            data : []
        }
        this.showLeftAside = this.showLeftAside.bind(this);
        this.closeLeftAside = this.closeLeftAside.bind(this);
        this.handleRankData = this.handleRankData.bind(this);
    }
    showLeftAside () {
        this.setState({
            isLeft : true
        })
    }
    closeLeftAside () {
        this.setState({
            isLeft : false,
            loaded : false
        });
    }
    handleRankData (data) {
        this.setState({
            data,
            loaded : true
        });
    }
    componentDidMount () {
        axios.get(`https://api.github.com/search/repositories?q=language:javascript&sort=stars`)
        .then(res => {
            this.handleRankData(res.data.items);
        })
        .catch(err => {
            console.log(err);
        })
    }
    render () {
        return (
            <div>
                <Header onShowLeftAside={this.showLeftAside} />
                {
                    this.state.loaded ? <Content data={this.state.data} /> : <Loading />
                }
                <CSSTransitionGroup
                    transitionName="move"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    {
                        this.state.isLeft ?  <LeftAside 
                            onLeftAsideClose = {this.closeLeftAside}
                            onHandleRankData = {this.handleRankData}
                        /> : null
                    }
                </CSSTransitionGroup>
            </div> 
        );
    }
}