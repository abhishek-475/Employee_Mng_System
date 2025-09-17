import React from 'react'

const Login = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center" >
      <div className="border-2 border-emerald-600 p-20">
        <form  className="flex flex-col items-center justify-center">
          <input type="email" placeholder="Enter your email" className='outline-none border-2 border-emerald-600 bg-transparent text-xl py-3 px-5 rounded-full placeholder:text-gray-400' />
          <input type="password" placeholder="Enter your password" className='outline-none border-2 border-emerald-600 bg-transparent text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400' required />
          <button className='text-white outline-none border-2 border-emerald-600 bg-transparent bg-emerald-500 text-xl py-3 px-5 mt-7 rounded-full placeholder:text-white'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
