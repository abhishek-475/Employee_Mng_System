import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)


  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded h-50 '>
      <div className='bg-red-400 py-2 px-4 flex justify-between mb-2'>
        <h2 className='w-1/5 text-lg font-medium bg-red-600'>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium bg-red-600'>New Task</h3>
        <h5 className='w-1/5 text-lg font-medium bg-red-600'>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium bg-red-600'>Completed</h5>
        <h5 className='w-1/5 text-lg font-medium bg-red-600'>Failed</h5>
      </div>



      <div className=''>
        {userData?.map((ele, idx) => {

          return <div key={idx} className='norder-2 border-emerald-500 py-2 px-4 flex justify-between mb-2'>
            <h2 className='w-1/5 text-lg font-medium'>{ele.firstName}</h2>
            <h3 className='w-1/5 text-lg font-medium text-blue-600'>{ele.taskCounts.newTask}</h3>
            <h5 className='w-1/5 text-lg font-medium text-yellow-600'>{ele.taskCounts.active}</h5>
            <h5 className='w-1/5 text-lg font-medium text-white'>{ele.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-lg font-medium text-red-600'>{ele.taskCounts.failed}</h5>
          </div>
        })}
      </div>
    </div>
  )
}

export default AllTask
