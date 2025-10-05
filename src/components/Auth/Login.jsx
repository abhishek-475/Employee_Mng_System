import React, { useState } from 'react'

const Login = ({ handleLogin }) => {



  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)


    setEmail("")
    setPassword("")


  }

  return (
    // <div className="flex h-screen w-screen items-center justify-center" >
    //   <div className="border-2 border-emerald-600 p-20">
    //     <form onSubmit={(e) => submitHandler(e)}
    //       className="flex flex-col items-center justify-center">
    //       <input type="email" placeholder="Enter your email" value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         className='outline-none border-2 border-emerald-600 bg-transparent text-xl py-3 px-5 rounded-full placeholder:text-gray-400' />
    //       <input type="password" placeholder="Enter your password" value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         className='outline-none border-2 border-emerald-600 bg-transparent text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400' required />
    //       <button className='text-white outline-none border-2 border-emerald-600  bg-emerald-500 text-xl py-3 px-5 mt-7 rounded-full placeholder:text-white'>Login</button>
    //     </form>
    //   </div>
    // </div>


    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 shadow-2xl rounded-2xl border border-gray-700 p-8 sm:p-10 transition-all duration-300 hover:shadow-gray-700">

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-400 mb-8">
          Welcome Back
        </h2>

        <form onSubmit={submitHandler} className="flex flex-col space-y-5">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-600 bg-gray-700 text-gray-200 text-lg py-3 px-5 rounded-full outline-none focus:ring-2 focus:ring-emerald-400 placeholder:text-gray-400 transition-all"
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-600 bg-gray-700 text-gray-200 text-lg py-3 px-5 rounded-full outline-none focus:ring-2 focus:ring-emerald-400 placeholder:text-gray-400 transition-all"
            required
          />

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white font-semibold text-lg py-3 rounded-full hover:bg-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  )
}

export default Login
