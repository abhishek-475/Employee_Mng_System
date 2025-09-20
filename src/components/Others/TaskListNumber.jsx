import React from 'react'

const TaskListNumber = ({ data }) => {
  if (!data || !data.taskCounts) {
    return (
      <div className="flex mt-10 justify-between gap-5 screen">
        <p className="text-gray-500 text-lg">Loading task stats...</p>
      </div>
    );
  }
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className="rounded-xl w-[45%] py-6 px-10 bg-violet-500">
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-10 bg-blue-500">
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-10 bg-emerald-500">
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Active</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-10 bg-red-500">
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
