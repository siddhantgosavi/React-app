import React from 'react';
var underscore = require('underscore');

class NavigationDots extends React.Component {

    constructor(props) {
        super();
    }

    getNavigationDots() {
        return underscore.times(this.props.maxIndex, key => {
            return <li key={key} className={ `${key < this.props.currentIndex ? "activeTab": ''}`}></li>;
        });
    }

    render () {
        return (
            <ul className="navigationDotsWrap">
                {this.getNavigationDots()}
            </ul>
        )
    }
};
export default NavigationDots;
