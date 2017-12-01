import React from 'react';
import '../../stylesheets/typingTest.css';
var underscore = require('underscore');

export default class TyperIndex extends React.Component {
    constructor(){
        super();;
        this.state = {
            seconds: 0,
            userSpeedStatus: false,
        };
        this.handleTextboxChange = this.handleTextboxChange.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.clearTimer = this.clearTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.checkValue = this.checkValue.bind(this);
    }

    componentDidMount(){

    }

    startTimer () {
        this.setState({
            seconds: this.state.seconds + 1,
        })
    }

    clearTimer () {
        this.setState({
            seconds: 0,
            userSpeedStatus: false,
        })
        this.refs.userInput.value = '';
    }

    handleTextboxChange () {
        this.timer = setInterval(this.startTimer, 100);
    }

    checkValue () {
        if (underscore.isEqual(this.refs.originalText.textContent.toLowerCase(), this.refs.userInput.value.toLowerCase())) {
            clearInterval(this.timer);
            this.setState({
                userSpeedStatus: true, 
            })
            this.refs.userInput.value= '';
        }
    }

    stopTimer () {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="container mainAppWrap">
                <div className="main">
                    <div className="test-area">
                        <div id="origin-text">
                            <p ref='originalText'>This is a typing test!</p>
                        </div>
                        <div className="test-wrapper">
                            <textarea 
                                ref="userInput"
                                name="userInput"
                                rows="6" 
                                placeholder="The clock starts when you start typing."
                                onChange={this.checkValue}
                                onFocus={this.handleTextboxChange}
                                onBlur={this.stopTimer}>
                            </textarea>
                        </div>
                        <div className="meta">
                            <div id="clock">
                                <div className="timer" ref='timeInSeconds'>{this.state.seconds}</div>
                            </div>
                            <button id="reset" onClick={this.clearTimer}>Start over</button>
                            {this.state.userSpeedStatus &&
                                <p>your typing speed is {`${this.state.seconds} ms`}</p>
                            }
                        </div>
                    </div>
                </div>
          </div>
        );
    }
}
