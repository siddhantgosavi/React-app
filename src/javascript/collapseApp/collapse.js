import React from 'react';
import CollapseItem from './collapseItems.js';
import '../../stylesheets/collapseApp.css';
var underscore = require('underscore');

export default class CollapseComponent extends React.Component {
    constructor() {
        super();
        this.state={
            contentArray: [
              {heading: 'menu1', description: 'content1'},
              {heading:'menu2',description: 'content2'},
              {heading: 'menu3', description: 'content3'},
            ],
        }
    };
    render() {
        return (
          <div>
              <ul className="collapseContainer text-center">
                  {underscore.map(this.state.contentArray, (content, key) => {
                      return (
                          <CollapseItem key={key} title={content.heading}  description={content.description} />
                      )
                    })
                }
              </ul>
          </div>
        );
  }
}
