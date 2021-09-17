import '../assets/Style.css'
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='contact-wrapper'>
      <form
        className='contact-container'
        onSubmit={handleSubmit}
      >
        <label>
          Name:
          <input
            name='Name'
            onChange={(e) => setName(e.target)}
          />
        </label>
        <label>
          Email:
          <input
            name='Email'
            onChange={(e) => setName(e.target)}
          />
        </label>
        <label>
          Comment:
          <textarea
            name='Comment'
            onChange={(e) => setName(e.target)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
