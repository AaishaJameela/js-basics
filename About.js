import React from 'react';
import Header from'./components/Header';
import Footer from'./components/Footer';
import Sidebar from'./components/Sidebar';

const About = () => {
  return (
    <center><div>
    <Header />
    <Sidebar />
    <h1>SIGN-UP</h1>
    <label><b>Enter your first name:</b></label><br></br>
    <input type="text" id="firstName" ></input> <br></br>
    <label><b>Enter your last name:</b></label><br></br>
    <input type="text" id="lastName" ></input> <br></br>
    <label><b>Enter your date of birth:</b></label><br></br>
    <input type="text" id="dob" ></input> <br></br>
    <label><b>Select your gender:</b></label><br></br>
    <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
      </div>
    <label><b>Enter your phone number:</b></label><br></br>
    <input type="number" id="phone" ></input><br></br><br></br>
    <button id="btn">Submit</button>
    <Footer />
    </div></center>
    );
}
export default About;