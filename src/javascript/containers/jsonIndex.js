import React from 'react';
import Header from '../components/header.js';
import JsonComponent from '../readJson/jsonComponent.js';

const Index = () =>  {
    return (
        <div>
            <Header headerText="json read APP" />
            <div className='ChildElement'>
                <JsonComponent />
            </div>
        </div>
    );
};
export default Index;
