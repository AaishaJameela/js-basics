import React, {useState} from 'react';

const About= () => { 
  const [inputName, setInputName] = useState(""); 
  const handleInputName = (e) => { 
    setInputName(e.target.value) 
  } 
  const [inputLname, setInputLname] = useState(""); 
  const handleInputLname = (e) => { 
    setInputLname(e.target.value) 
  } 
  const [inputDob, setInputDob] = useState(""); 
  const handleInputDob = (e) => { 
    setInputDob(e.target.value) 
  } 
  const [inputMgender, setInputMgender] = useState(""); 
  const handleInputMgender = (e) => { 
    setInputMgender(e.target.value) 
  } 
  const [inputFgender, setInputFgender] = useState(""); 
  const handleInputFgender = (e) => { 
    setInputFgender(e.target.value) 
  } 
  const [inputPhone, setInputPhone] = useState(""); 
  const handleInputPhone = (e) => { 
    setInputPhone(e.target.value) 
  } 
  const handleSubmitButton = () => { 
    console.log(inputName);
    console.log(inputLname);
    console.log(inputDob);
    console.log(inputMgender);
    console.log(inputMgender);
    console.log(inputPhone);
  }; 

  return (
    <center><div>
<h1>SIGN-UP</h1>
<label><b>Enter your first name:</b></label><br></br>
<input type="text" id="firstName" value={inputName} onChange={handleInputName} ></input> <br></br>
<label><b>Enter your last name:</b></label><br></br>
<input type="text" id="lastName" value={inputLname} onChange={handleInputLname} ></input> <br></br>
<label><b>Enter your date of birth:</b></label><br></br>
<input type="text" id="dob" value={inputDob} onChange={handleInputDob} ></input> <br></br>
<label><b>Select your gender:</b></label><br></br>
<div>
    <input type="radio" name="gender" value={inputMgender} onChange={handleInputMgender}/> Male
    <input type="radio" name="gender" value={inputFgender} onChange={handleInputFgender} /> Female
  </div>
<label><b>Enter your phone number:</b></label><br></br>
<input type="number" id="phone" value={inputPhone} onChange={handleInputPhone}></input><br></br><br></br>
<button onClick = {handleSubmitButton}>Submit</button>
</div></center>
);
}

export default About;