import React from 'react'

export default function HoneyPot() {
  return (
    <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
  )
}
