import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    
    // window.location.reload()
    
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>hello <br/><span className='text-3xl font-semibold'>{props.firstName}</span> </h1>
      <button onClick={logOutUser} className='bg-orange-500  text-lg font-medium px-5 py-2 rounded-small'>Logout</button>
    </div>
  )
}

export default Header
 