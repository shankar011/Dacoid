import React from 'react';
import styles from "./footer.module.css";
import home from "../../assets/workout/home.png";
import file from "../../assets/workout/file.png";
import camera from "../../assets/workout/camera.png";
import person from "../../assets/workout/person.png";
import search from "../../assets/workout/search.png";

const Footer = () => {
    return (
        <div className={`${styles["footer"]}`}>
            <div>
                <img className='ms-3 mt-4'  src={home} alt='img' />
                <img className='ms-3 mt-4' src={file} alt='img' />
            </div>

            <span><img src={search} alt='img' /> </span>

            <div> 
                <img className='ms-3 mt-4' src={camera} alt='img' />
                <img className='ms-3 mt-4' src={person} alt='img' />
            </div>

        </div>
    )
}

export default Footer