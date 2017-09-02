import React from 'react';
import './App.css';
import './stylesheets/custom.css';
import CollapseAppIndex from './javascript/containers/collapseAppIndex.js';
import JsonIndex from './javascript/containers/jsonIndex.js';
import TodoIndex from './javascript/containers/todoIndex.js';
import FetchDataIndex from './javascript/containers/fetchDataIndex.js';

class App extends React.Component {

    constructor() {
        super();
        this.getChoice = this.getChoice.bind(this);
    }

    getChoice (refName, event) {
        let list = document.getElementsByClassName('component');
        for(let i = 0; i < list.length ; i++) {
            list[i].classList.add('hide');
        }
        this.refs[refName].classList.remove('hide');
    }

    render() {
        return (
            <div className="App">
                <ul className="stickyLeftlist">
                    <li><a onClick={this.getChoice.bind(this, 'one')}>1.Collapse App</a></li>
                    <li><a onClick={this.getChoice.bind(this, 'two')}>2.JSon App</a></li>
                    <li><a onClick={this.getChoice.bind(this, 'three')}>3.TodoApp</a></li>
                    <li><a onClick={this.getChoice.bind(this, 'four')}>4.FetchData APP</a></li>
                </ul>
                <div className="component" ref='one'>
                    <CollapseAppIndex />
                </div>
                <div className="component hide" ref='two'>
                    <JsonIndex />
                </div>
                <div className="component hide" ref='three'>
                    <TodoIndex />
                </div>
                <div className="component hide" ref='four'>
                    <FetchDataIndex />
                </div>
            </div>
        );
  }
}

export default App;
