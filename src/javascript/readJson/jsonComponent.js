import React from 'react';
import listData from '../../static/colors.json';
var underscore = require('underscore');

export default class JsonComponent extends React.Component {
    constructor() {
        super();
        this.state={
            listData: listData.data,
        }
    }

    render() {
        return (
          <div className="jsonOutputWrap">
              {
                  underscore.map(this.state.listData, (data, key) => {
                    return (
                      <div key={key}>
                          {data.color}{data.type}{data.category}{data.code.rgba}{data.code.hex}
                      </div>
                    )
                  })
              }
          </div>
        );
  }
}
