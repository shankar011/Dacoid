import React from 'react';
// import "./NavBar.css";
import time from "../../assets/navbar/time.png";
import network from "../../assets/navbar/network.png";


const NavBar = () => {
  return (
    <div>
        <nav className='d-flex justify-content-between p-2'>
            <div>
            <img src={time} alt='img'/>
            </div>
            <div>
                <img src={network} alt='img'/> <br/>
                <a href='#' className='mt-5'>Skip</a>
            </div>
        </nav>
    </div>
  )
}

export default NavBar