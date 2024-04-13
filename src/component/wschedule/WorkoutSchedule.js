import React from 'react';
import styles from "./work.module.css";
import arrow from "../../assets/workout/arrow.png";
import larrow from "../../assets/workout/leftarrow.png";
import rarrow from "../../assets/workout/rightarrow.png";
import pcircle from "../../assets/workout/pinkcirle.png";
import plus from "../../assets/workout/plus.png";
const WorkoutSchedule = () => {
    return (
        <div>
            <div className={`${styles["check-out"]}`}>
                <div className='mt-2'>
                    <img src={arrow} alt='img' />
                </div>
                <p>Workout Schedule</p>
            </div>
            <div>
                <img src={larrow} alt='img' />
                <span className='ms-1 me-1'>Feb 2024</span>
                <img src={rarrow} alt='img' />
            </div>

            <div className={`${styles["date"]}`}>
                <ul>
                    <li>
                        <p className={`${styles['days']}`}>Sun</p>
                        <p className={`${styles['dates']}`}>5</p>
                    </li>
                    <li className={`${styles['mon']}`}>
                        <p className={`${styles['days']}`}>Mon</p>
                        <p className={`${styles['dates']}`}>6</p>
                    </li><li>
                        <p className={`${styles['days']}`}>Tue</p>
                        <p className={`${styles['dates']}`}>7</p>
                    </li><li>
                        <p className={`${styles['days']}`}>Wed</p>
                        <p className={`${styles['dates']}`}>8</p>
                    </li><li>
                        <p className={`${styles['days']}`}>Thu</p>
                        <p className={`${styles['dates']}`}>9</p>
                    </li>
                </ul>
            </div>

            <div className={`${styles['schedule']}`}>
                <ul>
                    <li>06:00AM</li>
                    <hr/>
                    <li>07:00AM</li>
                    <hr/>
                   
                    <button className={`${styles['ab']}`} >Ab Workout, 7:30am</button>

                    <li>08:00AM</li>
                    <hr/>
                    <button className={`${styles['upper']}`}>Upperbody Workout, 9am</button>
                    <li>09:00AM</li>
                    <hr/>
                    <li>10:00AM</li>
                    <hr/>
                    <li>11:00AM</li>
                    <hr/>
                    <li>12:00AM</li>
                    <hr/>
                    <li>01:00AM</li>
                    <hr/>
                    <li>02:00AM</li>
                    <button className={`${styles['lower']}`}>Lowerbody Workout, 3pm</button>
                    <hr/>
                    <li>03:00AM</li>
                    <hr/>
                    <li>04:00AM</li>
                    <hr/>
                    <li>05:00AM</li>
                    <hr/>


                </ul>
            </div>

            <div  className={`${styles['pcircles']}`}>
                <img src={pcircle}  alt='img' />
            </div>

        </div>
    )
}

export default WorkoutSchedule;