import React from 'react';
import Header from '../components/header.js';
import UserIndex from '../fetchDataApp/userIndex.js';

export default class Index extends React.Component {

    render() {
      return (
          <div>
              <Header headerText="fetch data APP" />
              <div className='ChildElement'>
                  <UserIndex />
              </div>
          </div>
      );
    }
}
