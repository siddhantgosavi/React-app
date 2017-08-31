import React from 'react';
var underscore = require('underscore');

export default class TodoSearch extends React.Component {
    constructor(props) {
       super();
       this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();
        this.props.searchItem(this.refs.searchText.value);
    }

    render() {
       let searchData = this.props.searchList;
        return (
            <div>
                <div>
                    <input type="text"
                        placeholder="search task"
                        ref="searchText"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    {underscore.map(searchData, (task, key) => {
                        return (
                            <p key={key}>task::{task.userInput}</p>
                        )}
                    )}
                </div>
            </div>
        );
  }
}
