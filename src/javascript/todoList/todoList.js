import React from 'react';
import TodoItem from './todoItem.js';
import TodoSearch from './todoSearch.js';
import '../../stylesheets/todolist.css';
var underscore = require('underscore');

export default class TodoList extends React.Component {
  // how to delete the user entered list(there is some problem only one entry is deleted)
  //validation on input
    constructor() {
        super();
        this.validateForm = this.validateForm.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.searchItem = this.searchItem.bind(this);
        this.state = {
            oldList: [],
            addbuttonStatus: false,
            searchList: [],
        };
    }

    handleInputChange(refName) {
        let userInput= this.refs[refName].value;
        if(userInput) {
            this.setState({
                addbuttonStatus: true,
            });
        } else {
            this.setState({
                addbuttonStatus: false,
            });
        }
        this.validateForm(refName);
    }

    validateForm(refName) { //validation function
        var inputValue = this.refs[refName].value;;
        if(/[^a-zA-Z0-9\-\/]/.test(inputValue)) {
            alert("you cannot add special characters to note");
            return false;
        }
        return true;
    }

    handleSubmit(event,refName) {
        event.preventDefault();
        let noteText = this.refs.input.value
        let result = this.state.oldList;
        if(noteText) {
            result.push({
                userInput: noteText,
            });
            this.setState({
                oldList: result,
            })
        }
          this.refs.input.value="";
    }

    deleteItem (deleteItemId) {
        let result = this.state.oldList;
        result.splice(deleteItemId, 1);
        this.setState({
            oldList: result, //passing new array
        });
    }

    handleInputFocus(refName) {
        this.refs[refName].classList.remove("hide");
    }

    handleInputBlur(refName) {
        this.refs[refName].classList.add("hide");
    }

    searchItem (searchText) {
        if(underscore.isEmpty(searchText) || !isNaN(searchText)) {
            console.log("invalid");
        } else {
              let result = underscore.filter(this.state.oldList , (task, key) => {
                  if(searchText.indexOf(task.userInput) > -1) {
                      return task;
                  }
              });
              this.setState({
                  searchList: result,
              });
        }
    }

    render() {
        let oldList = this.state.oldList;
        return (
            <div className="container">
                <form className="todoListForm" onSubmit={this.handleSubmit.bind(this)}>
                    <h3>{oldList.length} task to show </h3>
                    <div className="clearFloat">
                        <div className="floatLeft">
                            <div className="clearFloat">
                                <div className="userData floatLeft">
                                    <input placeholder="Enter Item"
                                        ref="input"
                                        onChange={this.handleInputChange.bind(this,"input")}
                                        onFocus={this.handleInputFocus.bind(this, "floatingLabel")}
                                        onBlur={this.handleInputBlur.bind(this, "floatingLabel")}
                                    />
                                    <span className="floatingLabel hide" ref="floatingLabel">Enter Item</span>
                                </div>
                                <div className="submitWrapper floatLeft">
                                    {this.state.addbuttonStatus &&
                                        <button type="submit" className="btn blueButton">add</button>
                                    }
                                </div>
                            </div>
                            <TodoItem listData={oldList} deleteItem={this.deleteItem}/>
                        </div>
                        {this.state.oldList.length
                            ? <div className="floatRight">
                                  <TodoSearch searchItem={this.searchItem} searchList={this.state.searchList}/>
                              </div>
                            : null
                        }
                    </div>
                </form>
            </div>
        );
    }
}
