import React from 'react';
import styles from "./form.module.css";
import line from "../../assets/forms/line.png";
import lines from "../../assets/forms/lines.png";
import google from "../../assets/forms/google.png";
import fb from "../../assets/forms/fb.png";

function Forms() {
    return (
        <div className={styles.forms}>
            <form id='create-account'>
                <p className={styles.account}>Create an account</p>
                <input type="text" class="form-control m-4 w-75 p-3" placeholder='First Name' aria-describedby="emailHelp" />
                <input type="text" class="form-control m-4 w-75 p-3" placeholder='Last Name' aria-describedby="emailHelp" />
                <input type="email" class="form-control m-4 w-75 p-3" placeholder='Email' aria-describedby="emailHelp" />
                <input type="password" class="form-control m-4 w-75 p-3" placeholder='Password' aria-describedby="emailHelp" />
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input ms-1" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">By proceeding, I agree to all <a href='#'>T&C</a> and <a href='#'> Privacy Policy</a></label>
                </div>
                <button type="submit" className="btn btn-primary w-75 mt-3">Create Account</button>

                <div className='d-flex mt-2 justify-content-space-around'>
                    <img className={styles.lines} src={line} alt='img' />
                    <span className='p-2'>Or</span>
                    <img className={styles.lines} src={lines} alt='img' />
                </div>

                <div className={styles.social}>
                   <a href='www.google.com'> <img src={google} alt='img'/></a>
                    <a href='www.facebook.com'><img src={fb} alt='img'/></a> <br/>
                    <label className="form-check-label" for="exampleCheck1">Already have an account<a className='ms-1' href='#'>Login</a></label>

                </div>

            </form>

            <form>
                <p className={styles.account}>Welcome Back</p>
    
                <input type="email" class="form-control m-4 w-75 p-3" placeholder='Email' aria-describedby="emailHelp" />
                <input type="password" class="form-control m-4 w-75 p-3" placeholder='Password' aria-describedby="emailHelp" />
                <label className="form-check-label" for="exampleCheck1"> <a href='#'>Forgot your password?</a></label>

                <button type="submit" className="btn btn-primary w-75 mt-3">Sign In</button>

                <div className='d-flex mt-2 justify-content-space-around'>
                    <img className={styles.lines} src={line} alt='img' />
                    <span className='p-2'>Or</span>
                    <img className={styles.lines} src={lines} alt='img' />
                </div>

                <div className={styles.social}>
                    <img src={google} alt='img'/>
                    <img src={fb} alt='img'/> <br/>
                    <label className="form-check-label" for="exampleCheck1">Don’t have an account yet? <a className='ms-1' href='#create-account'>Create an account</a></label>

                </div>

            </form>
        </div>
    )
}

export default Forms;