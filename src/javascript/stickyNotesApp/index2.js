import React from 'react';

export default class Board extends React.Component{

    constructor() {
        super();
        this.saveData = this.saveData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }

    componentDidMount() {
        let userName = localStorage.getItem('name');
        if(userName && userName.length) {
            this.refs.localValue.value = userName;
        }
    }

    saveData(refName) {
        let input  = this.refs[refName].value;
        if(input.length) {
            if(refName === 'localValue') {
                localStorage.setItem('name', input);
            }
            else {
                sessionStorage.setItem('name', input);
            }
        }
        else {
          console.log('input is empty')
        }

    }

    deleteData(refName) {
        let input  = this.refs[refName].value;
        if(input.length) {
            if(refName === 'localValue') {
                localStorage.removeItem('name');
            }
            else {
                sessionStorage.removeItem('name');
            }
            this.refs[refName].value = ''
        }
        else {
          console.log('input is empty')
        }
    }

    render() {
        console.log('coi')
        return (
            <div className="container">
                <form className='localData' id='userDataForm'>
                    <input placeholder ='enter value' ref='localValue' />
                    <button className="btn blueButton" onClick={this.saveData.bind(this, 'localValue')}>save to local storgae</button>
                </form>
                <div className='sessionData'>
                    <input placeholder ='enter value' ref='sessionValue' />
                    <button className="btn blueButton" onClick={this.saveData.bind(this, 'sessionValue')}>save to session storgae</button>
                </div>
                <div>
                    <button className="btn blueButton" onClick={this.deleteData.bind(this, 'localValue')}>delete from local storgae</button>
                    <button className="btn blueButton" onClick={this.deleteData.bind(this, 'sessionValue')}>delete from session storgae</button>
                </div>
            </div>
        )
    }
}
