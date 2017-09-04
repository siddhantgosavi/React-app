import React from 'react';
import './App.css';
import './stylesheets/custom.css';
import Header from './javascript/components/header.js';
import CollapseAppIndex from './javascript/containers/collapseAppIndex.js';
import JsonIndex from './javascript/containers/jsonIndex.js';
import TodoIndex from './javascript/containers/todoIndex.js';
import FetchDataIndex from './javascript/containers/fetchDataIndex.js';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            stateName: '',
        };
    }


    getSubComponent (componentName) {
        let defaultTemplate = (<div>
                                  <Header headerText="Collapse APP" />
                                  <CollapseAppIndex />
                               </div>
                              );
        switch (componentName) {
            case 'jsonIndex':
                return (
                    <div>
                        <Header headerText="Json Read App" />
                        <JsonIndex />
                    </div>
                );
            case 'todoIndex':
                return (
                    <div>
                        <Header headerText="To Do App" />
                        <TodoIndex />
                    </div>
                );
            case 'fetchDataIndex':
                return (
                    <div>
                        <Header headerText="fetch data APP" />
                        <FetchDataIndex />
                    </div>
                );
            case 'collapseIndex':
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
                    <li><a onClick={this.getChoice.bind(this, 'fetchDataIndex')}>3.Fetch Data app</a></li>
                </ul>
                {this.getSubComponent(this.state.stateName)}
            </div>
        );
  }
}

export default App;
