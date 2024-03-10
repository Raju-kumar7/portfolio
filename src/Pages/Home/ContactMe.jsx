import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ContactMe = () => {
  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate('/')
  }
  const handleClick=()=>{
    alert('Thanks for contact me')
  }
  return (
    <section id="Contact" className="contact--section">
      <div>
        {/* <p className="sub--title">Get In Touch</p> */}
        <h2>Contact Me</h2>
        <p className="text-lg">
        Feel free to connect with me.
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn"onSubmit={handleSubmit} onClick={handleClick}>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default ContactMe
