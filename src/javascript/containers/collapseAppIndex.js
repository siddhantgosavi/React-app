import React from 'react';
import Header from '../components/header.js';
import CollapseComponent from '../collapseApp/collapse.js';

export default class Index extends React.Component {

  componentWillMount() {
        // fetch("http://preview.sokrati.com/data/open_spendings.json")
        // .then(response => response.json())
        // .then(responseData => {
        //     this.setState({
        //         listData: responseData,
        //     });
        // })
        // .catch(error => {
        //     console.log('error fetching the data')
        // });
    }

    render() {

      return (
          <div>
              <Header headerText="Collapse APP" />
              <div className='ChildElement'>
                  <CollapseComponent />
              </div>
          </div>
      );
    }
  }
