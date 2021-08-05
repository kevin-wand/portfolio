import React from 'react'
import '../assets/Style.css'

export default function Contact() {
  return (
    <div className='contact-wrapper'>
      <form className='contact-container'>
        <label>
          Name:
          <input
            name='Name'
          />
        </label>
        <label>
          Email:
          <input
            name='Email'
          />
        </label>
        <label>
          Comment:
          <input
            name='Comment'
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
