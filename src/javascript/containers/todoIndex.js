import React from 'react';
import Header from '../components/header.js';
import TodoList from '../todoList/todoList.js';

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
              <Header headerText="TO DO APP" />
              <div className="ChildElement">
                  <TodoList />
              </div>
          </div>
      );
    }
  }
