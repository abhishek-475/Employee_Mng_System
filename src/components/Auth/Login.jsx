import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email",email);
    console.log("password", password);

    setEmail("")
    setPassword("")
    

  }

  return (
    <div className="flex h-screen w-screen items-center justify-center" >
      <div className="border-2 border-emerald-600 p-20">
        <form onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center">
          <input type="email" placeholder="Enter your email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='outline-none border-2 border-emerald-600 bg-transparent text-xl py-3 px-5 rounded-full placeholder:text-gray-400' />
          <input type="password" placeholder="Enter your password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='outline-none border-2 border-emerald-600 bg-transparent text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400' required />
          <button className='text-white outline-none border-2 border-emerald-600  bg-emerald-500 text-xl py-3 px-5 mt-7 rounded-full placeholder:text-white'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
