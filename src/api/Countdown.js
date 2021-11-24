import React, {Fragment} from 'react'
import {FaRegClock} from "react-icons/fa"
const Countdown = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
    return (
    <Fragment>
        <section className="timer-container">
            <section className="timer">
                 
            <div className="clock">
            <p><FaRegClock/></p>
                <section>
                    <i>{timerDays}d</i> 
                </section>
                <i> :</i>
                <section>
                    <i>{timerHours}h</i>
                </section>{" "}
                <i> :</i>
                <section>
                    <i>{timerMinutes}m</i>
                </section>{" "}
                <i> :</i>
                <section>
                    <i>{timerSeconds}s</i>
                </section>
            </div>
            </section>
        </section>
    </Fragment>
    );
};

Countdown.defaultProps={
    timerDays:10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};
export default Countdown
