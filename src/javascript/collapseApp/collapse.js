import React from 'react';
import CollapseItem from './collapseItems.js';
import '../../stylesheets/collapseApp.css';
import listData from '../../static/open_spendings.json';
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
            listData: listData.data,
        }
    };
    render() {
        console.log(this.state.listData);
        return (
          <div>
              <ul className="collapseContainer hide text-center">
                  {underscore.map(this.state.contentArray, (content, key) => {
                      return (
                          <CollapseItem key={key} title={content.heading}  description={content.description} />
                      )
                    })
                }
              </ul>
              <div>
              {
                  underscore.map(this.state.listData, (data, key) => {
                    return (
                      <div key={key}>
                          {data.amount}{data.type}{data.eng_rev_type}{data.year_start}{data.year_end}
                      </div>
                    )
                  })
              }
              </div>
          </div>
        );
  }
}
