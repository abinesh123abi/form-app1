import { useState } from "react";
import './App.css'

function App() {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [successMsg, setSuccessMsg] = useState(false);

  // 🔹 handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🔹 handle form submit
  const handleSubmit = (e) => {
     if (e) e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData); // send to backend later
    setSuccessMsg(true);
  };

  return (
    <>
         <div className='form-parent-container'>
              <div className='form-cont-child'>
                 <h1 className='heading-1'>Laravel 6 User Registration</h1>
                  <form  onSubmit={handleSubmit}>
                   
                    <div className='inner-div-form'>
                           {successMsg && (
                              <div className="alert-msg-cont">
                                <p>You have registered successfully.</p>
                              </div>
                            )}
                          <div>
                            <label>First Name</label>
                            <input name="firstName" onChange={handleChange} type='text' className='' placeholder='Enter First Name'/>
                          </div>
                          <div>
                            <label>Last Name</label>
                            <input name="lastName" onChange={handleChange} type='text' className='' placeholder='Enter Last Name'/>
                          </div>
                          <div>
                            <label>E-mail</label>
                            <input  name="email" onChange={handleChange} type='email' className='' placeholder='Enter E-mail Name'/>
                          </div>
                          <div>
                            <label>Password</label>
                            <input name="password" onChange={handleChange} type='password' className='' placeholder='Enter Password'/>
                          </div>
                          <div>
                            <label>Confirm Password</label>
                            <input name="confirmPassword"  onChange={handleChange} type='password' className='' placeholder='Confirm Password'/>
                          </div>
                          <div>
                            <label>Phone</label>
                            <input  name="phone" onChange={handleChange} type='tel' max={10} className='' placeholder='Enter Phone'/>
                          </div>
                          
                    </div>
                  </form>
                  <div className='footer'>
                      <button  onClick={handleSubmit} >Register</button>
                      <p> have an account? <span style={{color:"green"}}>Login</span></p>
                  </div>
              </div>
         </div>
    </>
  )
}

export default App
