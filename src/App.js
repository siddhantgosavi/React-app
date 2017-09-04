import React from 'react';
import './App.css';
import './stylesheets/custom.css';
import CollapseAppIndex from './javascript/containers/collapseAppIndex.js';
import JsonIndex from './javascript/containers/jsonIndex.js';
import TodoIndex from './javascript/containers/todoIndex.js';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            stateName: '',
        };
    }


    getSubComponent (componentName) {
        let defaultTemplate =  ( <CollapseAppIndex /> );
        switch (componentName) {
            case 'collapseIndex':
                return defaultTemplate;
            case 'jsonIndex':
                return ( <JsonIndex /> );
            case 'todoIndex':
                return ( <TodoIndex /> );
            default:
                return defaultTemplate;
        }
    }

    getChoice(name) {
        this.setState({
            stateName: name
        })
    }

    render() {
        return (
            <div className="App">
                <ul className="stickyLeftlist">
                    <li><a onClick={this.getChoice.bind(this, 'collapseIndex')}>1.Collapse App</a></li>
                    <li><a onClick={this.getChoice.bind(this, 'jsonIndex')}>2.JSon App</a></li>
                    <li><a onClick={this.getChoice.bind(this, 'todoIndex')}>3.TodoApp</a></li>
                </ul>
                <div className="component">{this.getSubComponent(this.state.stateName)}</div>
            </div>
        );
  }
}

export default App;
