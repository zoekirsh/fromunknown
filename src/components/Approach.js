import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';
import Back from './Back';

const Approach = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    e.persist()
    setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}))
  }

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_5ky9oyh', 'template_tordzor', e.target, process.env.REACT_APP_EMAIL_KEY)
      .then(
        (result) => {
          console.log(result.text)
          setSubmitted(true)
        }, 
        (error) => {
        console.log(error.text)
        }
      )
  }

  return (
    <div>
      <Back />
      {!submitted && 
        <form className="center approach" onSubmit={sendEmail}>
          <label> name </label>
          <input type="text" name="name" value={inputs.name} placeholder="romeo" onChange={handleChange} />
          
          <br></br>

          <label>email </label>
          <input type="text" name="email" value={inputs.email} placeholder="romeo@feelings.com" onChange={handleChange} />
         
          <br></br>

          <label> message </label>
          <textarea name="message" value={inputs.message} placeholder="can we make out? yes/no" onChange={handleChange} />

          <br></br>

          <input className="submit-btn" type="submit" value="approach" />
        </form>
      }
      {submitted && 
        <div>
          <p>Thank you for reaching out.</p>
          <p><Link to="/">home</Link></p>
        </div>
      }
    </div>
  )
}

export default Approach;