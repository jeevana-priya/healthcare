import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
function Homepage() {
  return (
    <>
    <header>
        <img id="logo"
          src="https://member.uhc.com/myuhc/content/dam/myuhc/images/logo/MyUHC_Logo.svg"
          alt="United healthcare logo"
        />
        <select id="lang">
          <option value="english">ENGLISH</option>
          <option value="espanol">ESPANOL</option>
        </select>
      </header>
      <main>
        <div>
        <h1>Welcome back</h1>
        <h1>Let's get you signed in again</h1>
        <p>Easy access to plan information anytime anywhere. Get the most out of your coverage.</p>

        <Link to="/signin"><button>Sign In</button></Link>
        <Link to="/register"><button>Register</button></Link>
        </div>

        <div>
            <nav>
            <img className="icons" src="https://member.uhc.com/myuhc/content/dam/myuhc/images/icons/Icon_Stethoscope_2C_CirBlue_RGB.png" alt="provider"></img>
            <div className="icons-details">
            <Link to="/provider"><h3>Find a Provider</h3></Link>
            <p>
            Find a doctor, medical specialist, mental health care provider, hospital or lab. 
            </p>
            </div>
            </nav>
            <nav>
            <img className="icons" src="https://member.uhc.com/myuhc/content/dam/myuhc/images/icons/ic_Dentures_2C_onBlue.svg" alt="dentist"></img>
            <div className="icons-details"><Link to="/dentist"><h3>Find a Dentist</h3></Link>
            <p>
            Find a local dentist or dental care in your area.
            </p>
            </div>
            </nav>
            <nav>
            <img className="icons" src="https://member.uhc.com/myuhc/content/dam/myuhc/images/icons/Icon_EyeExam_2C_CirBlue_RGB.png" alt="vision provider"></img>
            <div className="icons-details">
            <Link to="/visionProvider"><h3>Find a Vision Provider</h3></Link>
            <p>
            Find a vision provider within a large national network that offers convenience and choice.
            </p>
            </div>
            </nav>
            <nav>
            <img className="icons" src="https://member.uhc.com/myuhc/content/dam/myuhc/images/icons/Icon_PillBottle_2C_CirBlue_RGB.png" alt="pharmacy"></img>
            <div className="icons-details">
            <Link to="/pharmacy"><h3>Find a Pharmacy</h3></Link>
            <p>Find a local pharmacy that's convenient for you.
            </p>
            </div>
            </nav>    
        </div>
    </main>

    <Footer />
    </>
  )
}

export default Homepage
