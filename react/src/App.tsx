import { useState } from 'react'

import './App.css'
import axios from 'axios'
import Turnstile from 'react-turnstile'

function App() {
  const [token, setToken] = useState<string>("")

  return (
    <>
    <input placeholder='OTP'/>
    <input placeholder='new pass'/>

      <Turnstile onSuccess={(token)=>{
        setToken(token)
      }} sitekey='0x4AAAAAAA8xxpVvicaRTucN'/>
    <button onClick={()=>{
      axios.post('http://localhost:3000/reset-password',{
        email:"yashgtech00@gmail.com",
        otp:"123456",
        token:token,
      })
    }}>
      Update password</button>
    </>
  )
}

export default App
