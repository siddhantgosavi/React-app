import React from 'react';
require('../../stylesheets/clock.css')

export default class ClockIndex extends React.Component {
    constructor() {
        super();
        this.getTime = this.getTime.bind(this);
        this.getClockTransform = this.getClockTransform.bind(this);
    }

    componentWillMount() {
         this.timer = setInterval(this.getTime, 1000); //code for continuos updation of clock timer
    }

    componentWillUnmount () {
          clearInterval(this.timer); //removing the setinterval method otherwise error will ebe thrown 
     }


    getTime() {
        let hourHand = this.refs.hourWrap; //hour hand element
        let minuteHand = this.refs.minuteWrap; //minute hand element
        let secondHand = this.refs.secondWrap; //second hand element

        let date = new Date(); //getting the new date
        let hr = date.getHours(); // get hours
        let min = date.getMinutes(); //get minutes
        let sec = date.getSeconds(); //get seconds
        let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12); 
        let secPosition = sec * 360 / 60;
        let minPosition = (min * 360 / 60) + (secPosition / 60);


        hrPosition = hrPosition + (3 / 360);
        minPosition = minPosition + (6 / 60);
        secPosition = secPosition + 6;

        this.getClockTransform(hourHand, hrPosition);
        this.getClockTransform(minuteHand, minPosition);
        this.getClockTransform(secondHand, secPosition);
    }

    getClockTransform(handType, position) {
        handType.style.transform = `rotate(${position}deg)`; //adding style 
    }

    render() {
        return (
            <div>
                <div className="clockbox">
                    <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
                        <g id="face">
                            <circle className="circle" cx="300" cy="300" r="253.9" />
                            <path className="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6" />
                            <circle className="mid-circle" cx="300" cy="300" r="16.2" />
                        </g>
                        <g id="hour" ref="hourWrap">
                            <path className="hour-arm" d="M300.5 298V142" />
                            <circle className="sizing-box" cx="300" cy="300" r="253.9" />
                        </g>
                        <g id="minute" ref="minuteWrap">
                            <path className="minute-arm" d="M300.5 298V67" />
                            <circle className="sizing-box" cx="300" cy="300" r="253.9" />
                        </g>
                        <g id="second" ref="secondWrap">
                            <path className="second-arm" d="M300.5 350V55" />
                            <circle className="sizing-box" cx="300" cy="300" r="253.9" />
                        </g>
                    </svg>
                </div>
            </div>
        )
    }
}