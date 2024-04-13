import React from 'react';
import styles from "./carousel.module.css";
import cycle from "../../assets/carousel/cycle.png";
import guys from "../../assets/carousel/guys.png";
import circle from "../../assets/carousel/circle.png";
import circle_1 from "../../assets/carousel/circle_2.png";

const MyCarousel = () => {



    return (
        <div className='main'>
            <div>
                <img src={guys} alt='img' />
                <h4  className={styles.title}>Track Your Goal</h4>
                <p className={styles.para}>Don’t worry if you have trouble determining your goals,
                    We can help you determine your goals and track your goals
                </p>
                <a href='#'>
                    <img className='circle' src={circle} alt='img' />
                </a>
            </div>

            <div>
                <img src={cycle} alt='img' />
                <h4 className={styles.title} >Get Burn</h4>
                <p className={styles.para}>Let’s keep burning to achieve your goals, 
                    it hurts only temporarily, if you give up now you will be in pain forever
                </p>
                <a href='#'>
                    <img className='circle' src={circle_1} alt='img' />
                </a>
            </div>

        </div>


    );
}

export default MyCarousel;
