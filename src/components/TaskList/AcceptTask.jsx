import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 w-[300px] sm:w-72 h-full bg-blue-600 p-5 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200'>
      <div className="flex justify-between items-center mb-3">
        <h4 className='bg-blue-800 text-sm px-3 py-1 rounded text-white'>{data.category}</h4>
        <h4 className='text-sm text-gray-100'>{data.taskDate}</h4>
      </div>
      <h2 className='text-2xl font-semibold mb-2 text-white'>{data.taskTitle}</h2>
      <p className='text-sm mb-4 text-gray-200'>{data.taskDescription}</p>
      <div className='flex justify-between gap-2'>
        <button className='flex-1 bg-green-600 hover:bg-green-700 py-2 rounded text-white text-sm transition'>Mark Completed</button>
        <button className='flex-1 bg-red-600 hover:bg-red-700 py-2 rounded text-white text-sm transition'>Mark Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
