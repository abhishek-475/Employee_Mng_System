import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id='tasklist' className='h-[55%] flex flex-nowrap overflow-x-auto items-center justify-start w-full  gap-5 py-5 mt-10'>
      {data?.tasks?.map((ele, index) => {
        if (ele.active) {
          return <AcceptTask key={index} data={ele} />
        }
        if(ele.newTask){
          return <NewTask  key={index} data={ele}/>
        }
        if(ele.completed){
          return <CompleteTask key={index} data={ele} />
        }
        if(ele.failed){
          return <FailedTask key={index} data={ele} />
        }
      })}

    </div>
  )
}

export default TaskList
