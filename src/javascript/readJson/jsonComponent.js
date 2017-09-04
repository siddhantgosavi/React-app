import React from 'react';
import listData from '../../static/colors.json';
var underscore = require('underscore');

const JsonComponent = () => {
    return (
        <div className="jsonOutputWrap">
            {
                underscore.map(listData.data, (data, key) => {
                    return (
                        <div key={key}>
                            {data.color}{data.type}{data.category}{data.code.rgba}{data.code.hex}
                        </div>
                    )
                })
            }
        </div>
      );
};
export default JsonComponent;
