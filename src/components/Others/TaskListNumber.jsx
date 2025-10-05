import React from 'react'

const TaskListNumber = ({ data }) => {

   const cardBase = 'flex flex-col items-center justify-center rounded-2xl py-6 sm:py-8 px-6 sm:px-10 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'

  return (
    // <div className='flex mt-10 justify-between gap-5 screen'>
    //   <div className="rounded-xl w-[45%] py-6 px-10 bg-violet-500">
    //     <h2 className='text-3xl font-semibold'>{data?.taskCounts?.newTask}</h2>
    //     <h3 className='text-xl font-medium'>New Task</h3>
    //   </div>
    //   <div className="rounded-xl w-[45%] py-6 px-10 bg-blue-500">
    //     <h2 className='text-3xl font-semibold'>{data?.taskCounts?.completed}</h2>
    //     <h3 className='text-xl font-medium'>Completed</h3>
    //   </div>
    //   <div className="rounded-xl w-[45%] py-6 px-10 bg-emerald-500">
    //     <h2 className='text-3xl font-semibold'>{data?.taskCounts?.active}</h2>
    //     <h3 className='text-xl font-medium'>Active</h3>
    //   </div>
    //   <div className="rounded-xl w-[45%] py-6 px-10 bg-red-500">
    //     <h2 className='text-3xl font-semibold'>{data?.taskCounts?.failed}</h2>
    //     <h3 className='text-xl font-medium'>Failed</h3>
    //   </div>
    // </div>

     <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>

      {/* New Task */}
      <div className={`${cardBase} bg-gradient-to-br from-emerald-500 to-teal-600`}>
        <h2 className='text-4xl font-bold mb-2'>{data?.taskCounts?.newTask}</h2>
        <h3 className='text-lg font-medium opacity-90'>New Task</h3>
      </div>

      {/* Completed */}
      <div className={`${cardBase} bg-gradient-to-br from-sky-500 to-blue-600`}>
        <h2 className='text-4xl font-bold mb-2'>{data?.taskCounts?.completed}</h2>
        <h3 className='text-lg font-medium opacity-90'>Completed</h3>
      </div>

      {/* Active */}
      <div className={`${cardBase} bg-gradient-to-br from-purple-500 to-indigo-600`}>
        <h2 className='text-4xl font-bold mb-2'>{data?.taskCounts?.active}</h2>
        <h3 className='text-lg font-medium opacity-90'>Active</h3>
      </div>

      {/* Failed */}
      <div className={`${cardBase} bg-gradient-to-br from-red-500 to-rose-600`}>
        <h2 className='text-4xl font-bold mb-2'>{data?.taskCounts?.failed}</h2>
        <h3 className='text-lg font-medium opacity-90'>Failed</h3>
      </div>

    </div>
  )
}

export default TaskListNumber
