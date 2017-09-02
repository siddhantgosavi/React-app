import React from 'react';
import '../../stylesheets/collapseApp.css';
import UserData from './userData.js';
var underscore = require('underscore');

export default class UserIndex extends React.Component {
    constructor() {
        super();
        this.state={
            isLoading: false,
            result: [],
            requestErrorMsg: ''
        };
        this.fetchUserData = this.fetchUserData.bind(this);
    }

    componentWillMount() {
        localStorage.getItem('contact') && this.setState({
            result: JSON.parse(localStorage.getItem('contact')), //if exist in local storage set it to result array
            isLoading: false,
        });
    }

    componentDidMount() {
        if(underscore.isEmpty(localStorage.getItem('contact'))) { //fetch only if data does not exist on local storage
            this.fetchUserData();
        } else {
            console.log('fetching data from local storage');
        }
    }

    fetchUserData() {
        fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
        .then(response => response.json()) //turn response to json
        .then(parsedJson => this.setState({
            result: parsedJson.results,  //getting the response and assigning it to userdata array
            isLoading: false,
        }))
        .catch(error => this.setState({
            requestErrorMsg: error.responseJSON,
        })) //for error handling
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('contact', JSON.stringify(nextState.result)); //using localStorage to save the api response
        localStorage.setItem('time', Date.now());
    }

    render() {
        const {isLoading, result, requestErrorMsg} = this.state;
        let userData = underscore.map(result, (user, key) => { //modifying the result according to html requirement
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
                {requestErrorMsg
                    ? <div>{requestErrorMsg}</div>
                    : null
                }
                {!isLoading && result.length
                    ? <UserData userDetails={userData} />
                    : null
                }
                <div className="loader">
                    <div className="icon"></div>
                </div>
            </div>
        );
  }
}
