import React from 'react';
import '../../stylesheets/collapseApp.css';
import UserData from './userData.js';
import { fetch } from '../utils/restUtils';

var underscore = require('underscore');

export default class UserIndex extends React.Component {
    constructor() {
        super();
        this.state={
            isLoading: false,
            userDetails: [],
            errorMessage: ''
        };
        this.fetchUserData = this.fetchUserData.bind(this);
        this.successHandler = this.successHandler.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
    }

    fetchUserData() {
        fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb', this.successHandler, this.errorHandler);
    }

    successHandler (result) {
        this.setState({
            userDetails: result.results,
        })
    }

    errorHandler (error) {
        this.setState({
            errorMessage: error ? error.description : 'Error fetching data.'
        })
    }

    render() {
        const {isLoading, userDetails, errorMessage} = this.state;
        let userInfo = underscore.map(userDetails, (user, key) => { //modifying the result according to html requirement
            return (
                {
                  name: `${user.name.title}. ${user.name.first} ${user.name.last}`,
                  email: `${user.email}`,
                  login: `${user.login.username}`,
                  location: `${user.location.street}, ${user.location.city}, ${user.location.state} ${user.location.postcode}`
                }
            )
        });
        return (
            <div className={`content ${isLoading ? 'isLoading' : ''}`}>
                <a className="btn btnBlue" onClick={this.fetchUserData}>fetch data</a>
                {errorMessage
                    ? <div>{errorMessage}</div>
                    : null
                }
                {!isLoading && userDetails.length
                    ? <UserData userDetails={userInfo} />
                    : null
                }
                <div className="loader">
                    <div className="icon"></div>
                </div>
            </div>
        );
  }
}
