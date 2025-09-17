import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'> 
      <div className="rounded-xl w-[45%] py-6 px-10 bg-violet-500">
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>new Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-10 bg-blue-500">
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>new Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-10 bg-emerald-500">
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>new Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-10 bg-red-500">
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>new Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
