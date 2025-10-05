import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 w-[300px] sm:w-72 h-full bg-gray-200 p-5 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200'>
      <div className='flex justify-between items-center mb-3'>
        <h3 className='bg-gray-400 text-sm px-3 py-1 rounded text-gray-800'>{data.category}</h3>
        <h4 className='text-sm text-gray-700'>{data.taskDate}</h4>
      </div>
      <h2 className='text-2xl font-semibold mb-2 text-gray-900'>{data.taskTitle}</h2>
      <p className='text-sm mb-4 text-gray-700'>{data.taskDescription}</p>
      <button className='w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white text-sm transition'>
        Accept Task
      </button>
    </div>
  )
}

export default NewTask
