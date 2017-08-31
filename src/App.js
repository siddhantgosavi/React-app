import React from 'react';
import './App.css';
import './stylesheets/custom.css';
//import Index from './javascript/containers/todoIndex.js';
import Index from './javascript/containers/collapseAppIndex.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <div>
              <Index />
          </div>
      </div>
    );
  }
}

export default App;
