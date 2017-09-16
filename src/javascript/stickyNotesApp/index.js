import React from 'react'
import Note from './note.js'
require ('../../stylesheets/stickyNotes.css');
var underscore = require('underscore');

export default class Board extends React.Component{

    constructor() {
        super();
        this.state = {
            notes: [],
        };
    }

    render() {
        return (
                <div className="container">
                    <div className='board'>
                        <button className="btn blueButton">Add Note</button>
                        <Note />
                    </div>
                </div>
                )
    }
}


