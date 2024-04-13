import React from 'react';
import styles from "./work.module.css";
import arrow from "../../assets/workout/arrow.png";
import chart from "../../assets/workout/chart.png";
import warn from "../../assets/workout/warning.png";
import workout from "../../assets/workout/workout.png";
import upper from "../../assets/workout/upper.png";
import fitness from "../../assets/workout/fitness.png";

const Workout = () => {
    return (
        <div>
            <div className={`${styles["check-out"]}`}>
               <div className='mt-2'>
               <img src={arrow} alt='img' />
               </div>
                <p>Workout Tracker</p>
            </div>
            <div className='mt-2'>
                <img src={chart} alt='img' />
                <div className={`${styles["warning"]}`}>
                    <img className='mt-2' src={warn} alt='img' />
                    <span className='w-50'>You've burned fewer calories than yesterday. Time to get moving! </span>
                </div>
            </div>

            <div className={`${styles["heading"]}`}>
                <p>Upcoming Workout</p>
                <span>See more</span>
            </div>

            <div className={`${styles["check-list"]}`}>

                <div className='d-flex justify-content-between'>
                    <img className='me-3' src={workout} alt='img' />
                    <div className='me-4'>

                        <p className={`${styles["body"]}`}>Full Body Workout</p>
                        <p className={`${styles["time"]}`}>Today 3pm</p>
                    </div>

                    <div className="form-check form-switch">
                        <input className="form-check-input mt-4 ms-4" type="checkbox" id="flexSwitchCheckChecked" checked />
                    </div>

                </div>

            </div>

            <div className={`${styles["check-list"]}`}>

                <div className='d-flex justify-content-between'>
                    <img className='me-3' src={upper} alt='img' />
                    <div className='me-4'>

                        <p className={`${styles["body"]}`}>Upper Body Workout</p>
                        <p className={`${styles["time"]}`}>4 Feb, 3:30 pm</p>
                    </div>

                    <div className="form-check form-switch">
                        <input className="form-check-input mt-4 ms-4" type="checkbox" id="flexSwitchCheckChecked" />
                    </div>



                </div>

            </div>

            <div>
                <h4>What Do You Want to Train</h4>
            </div>

            <div className={`${styles["fitness"]}`}>
                <div>
                    <p className={`${styles["full-body"]}`}>Full Body Workout</p>
                    <p className={`${styles['body-part']}`}>Arms</p>
                    <p className={`${styles['body-part']}`}>Chest</p>
                </div>
                <img src={fitness} alt='img' />
            </div>

        </div>
    )
}

export default Workout