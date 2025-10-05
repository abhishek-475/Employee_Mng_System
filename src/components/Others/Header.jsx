import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')


  }

  const firstName = props.data?.firstName || props.firstName || 'User'

  return (


    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-xl p-5 shadow-md mb-6 transition-all duration-300">

      {/* Left section */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide">
          Welcome back, <span className="font-bold text-white drop-shadow-sm">{firstName}</span>
        </h1>
        <p className="text-sm sm:text-base opacity-90 mt-1">Here’s your task overview</p>
      </div>

      {/* Right section */}
      <button
        onClick={logOutUser}
        className="mt-4 sm:mt-0 bg-white text-orange-600 font-semibold px-6 py-2 rounded-lg shadow-sm hover:bg-orange-100 transition-all duration-300"
      >
        Logout
      </button>
    </header>

  )
}

export default Header
