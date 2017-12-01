import React from 'react';
var underscore = require('underscore');

export default class UserData extends React.Component {

    toggleContent(refName, event) {
        this.refs[refName].classList.toggle('hidden');
    }

    render() {
        const {userDetails} = this.props;
        return (
          <ul className="collapseContainer text-center">
              {underscore.map(userDetails, (user, key) => {
                  return (
                      <li key={key} className='collapseWrapper showCursor' onClick={this.toggleContent.bind(this, `${key}content`)}>
                          <div className="collapseHead">
                              <h2>{`Name:: ${user.name}`}</h2>
                          </div>
                          <div ref={`${key}content`} className="hidden">
                              <p>{`email id ::${user.email}`}</p>
                              <p>{`gender :: ${user.login}`}</p>
                              <p>{`Address :: ${user.location}`}</p>
                          </div>
                      </li>
                  )
              })
              }
          </ul>
        );
  }
}
