import React from 'react';
import NavigationDots from '../shared/navigationDots.js';
import { fetch } from '../utils/restUtils.js'; 
var underscore = require('underscore');

export default class JsonComponent  extends React.Component {
    constructor() {
        super();
        this.state = {
            userDetails: [],
            errorMessage: ''
        }
        this.successHandler = this.successHandler.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
    }

    componentDidMount() {
        let url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';  
        fetch(url, this.successHandler, this.errorHandler);
    }

    successHandler(result) {
        this.setState({
            userDetails: [result], //saving response in userdetails
        })
    }

    errorHandler(error) {
        this.setState({
            errorMessage: error ? error.description : 'Error fetching data.'
        })
    }

    render() {
        //need to render the response coming from server
        return (
            <div>
                <div>
                    <h1>App 2 of 5</h1>
                    <NavigationDots currentIndex={2} maxIndex={5} />
                </div>
                <div className="jsonOutputWrap">
                    {underscore.map(this.state.userDetails, (data, key) => {
                            return (
                                <p key={key}>{data.squadName}</p>
                            )
                        })

                    }
                </div>
            </div>
        );
    }
};
