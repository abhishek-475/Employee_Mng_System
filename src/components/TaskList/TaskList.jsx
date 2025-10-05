import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (


    <div
      id='tasklist'
      className='mt-10 flex flex-nowrap overflow-x-auto items-stretch gap-5 py-5 w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100'
    >
      {data?.tasks?.map((ele, index) => {
        if (ele.active) return <AcceptTask key={index} data={ele} />
        if (ele.newTask) return <NewTask key={index} data={ele} />
        if (ele.completed) return <CompleteTask key={index} data={ele} />
        if (ele.failed) return <FailedTask key={index} data={ele} />
      })}
    </div>

  )
}

export default TaskList
