import React from 'react';
import listData from '../../static/colors.json';
import NavigationDots from '../shared/navigationDots.js';
var underscore = require('underscore');

const JsonComponent = () => {
    return (
        <div>
            <div>
                <h1>App 2 of 5</h1>
                <NavigationDots currentIndex={2} maxIndex={5} />
            </div>
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
        </div>
      );
};
export default JsonComponent;
