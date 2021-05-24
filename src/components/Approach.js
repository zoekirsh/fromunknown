import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';

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
      {!submitted && 
        <form onSubmit={sendEmail}>
          <label>
            name:
              <input type="text" name="name" value={inputs.name} placeholder="romeo" onChange={handleChange} />
          </label>
          <label>
            email: 
              <input type="text" name="email" value={inputs.email} placeholder="romeo@feelings.com" onChange={handleChange} />
          </label>
          <label>
            message:
              <textarea name="message" value={inputs.message} placeholder="can we make out? yes or no" onChange={handleChange} />
          </label>
          <input type="submit" value="approach" />
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