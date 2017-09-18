import React from 'react'

export default class Note extends React.Component {

    constructor() {
        super();
        this.state = {
            editing: true,
        };
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);

    }

    renderForm() {
        return (
            <div className="note">
                <textarea ref="newText"></textarea>
                <button className="btn blueButton">SAVE</button>
            </div>
        )
    }

    renderDisplay() {
        return ( 
            <div className="note">
                <p>hi</p>
                <div className='notesActionWrap'>
                    <button className="btn blueButton">EDIT</button>
                    <button className="btn redButton">X</button>
                </div>
            </div>
            )
    }
    
    render() {
        return ( <div>
                {(this.state.editing) ? this.renderForm()
                                    : this.renderDisplay()}
                </div>
        )

    }
}

