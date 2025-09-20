import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')


  }

  const firstName = props.data?.firstName || props.firstName || 'User'

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>hello <br /><span className='text-3xl font-semibold'>{firstName}</span> </h1>
      <button onClick={logOutUser} className='bg-orange-500  text-lg font-medium px-5 py-2 rounded-small'>Logout</button>
    </div>
  )
}

export default Header
