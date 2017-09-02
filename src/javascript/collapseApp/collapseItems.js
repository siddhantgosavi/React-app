import React from 'react';
import PropTypes from 'prop-types';

export default class CollapseItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
        };
    }

    toggleContent(refName, event) {
        this.setState({
            isExpanded: !this.state.isExpanded,
        });
    }

    render() {
        let {title, description} = this.props;
        return (
            <li className={`collapseWrapper showCursor ${this.state.isExpanded ? 'expanded' : ''}`} onClick={this.toggleContent.bind(this, 'content')}>
                <div className="collapseHead">
                    <h2>{title}</h2>
                </div>
                <div ref='content' className="collapseBody hide">
                    <p>{description}</p>
                </div>
            </li>
        );
  }
}

//proptypes should be defined from where they are passed
CollapseItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};
