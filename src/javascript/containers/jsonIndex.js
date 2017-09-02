import React from 'react';
import Header from '../components/header.js';
import JsonComponent from '../readJson/jsonComponent.js';

export default class Index extends React.Component {

    render() {
      return (
          <div>
              <Header headerText="json read APP" />
              <div className='ChildElement'>
                  <JsonComponent />
              </div>
          </div>
      );
    }
}
