import React from 'react';
import Header from '../components/header.js';
import TodoList from '../todoList/todoList.js';

export default class Index extends React.Component {

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
