import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)


    const [taskTitle, setTaskTitle] = useState('')
    const [taskDesc, setTaskdesc] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    // const submitHandler = (e) => {
    //     e.preventDefault();

    //     setNewTask({ taskTitle, taskDescription: taskDesc, taskDate, category, assignTo, active: false, newTask: true, failed: false, completed: false })


    //     userData.forEach(function (ele) {
    //         if (assignTo == ele.firstName) {
    //             ele.tasks.push(newTask)
    //             ele.taskCounts.newTask += 1;

    //         }
    //     })
    //     setUserData(userData)
    //     console.log(userData);



    //     setTaskTitle('')
    //     setTaskDate('')
    //     setAssignTo('')
    //     setCategory('')
    //     setTaskdesc('')
    // }

    const submitHandler = (e) => {
  e.preventDefault();

  const task = {
    taskTitle,
    taskDescription: taskDesc,
    taskDate,
    category,
    assignTo,
    active: false,
    newTask: true,
    failed: false,
    completed: false
  }

  const updatedUserData = userData.map(user => {
    if (user.firstName === assignTo) {
      return {
        ...user,
        tasks: [...user.tasks, task],
        taskCounts: {
          ...user.taskCounts,
          newTask: user.taskCounts.newTask + 1
        }
      }
    }
    return user
  })

  setUserData(updatedUserData)
  console.log(updatedUserData);

  // reset form fields
  setTaskTitle('')
  setTaskDate('')
  setAssignTo('')
  setCategory('')
  setTaskdesc('')
}


    return (

        // <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
        //     <form onSubmit={(e) => { submitHandler(e) }}
        //         className='flex flex-wrap w-full items-start justify-between'>
        //         <div className='w-1/2'>
        //             <div>
        //                 <h3 className='text-sm  text-gray-400 mb-0.5'>Task title</h3>
        //                 <input type="text" placeholder='Make a UI'
        //                     value={taskTitle}
        //                     onChange={(e) => { setTaskTitle(e.target.value) }}
        //                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
        //                 />
        //             </div>
        //             <div>
        //                 <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
        //                 <input type="date"
        //                     value={taskDate}
        //                     onChange={(e) => { setTaskDate(e.target.value) }}
        //                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
        //                 />
        //             </div>
        //             <div>

        //                 <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
        //                 <input type="text" name="" id="" placeholder='employee name'
        //                     value={assignTo}
        //                     onChange={(e) => { setAssignTo(e.target.value) }}
        //                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
        //                 />
        //             </div>
        //             <div>

        //                 <h3 className='text-sm text-gray-300 mb-0.5'>category</h3>
        //                 <input type="text" name="" id="" placeholder=' design'
        //                     value={category}
        //                     onChange={(e) => { setCategory(e.target.value) }}
        //                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
        //                 />
        //             </div>
        //         </div>


        //         <div className='w-2/5 flex flex-col items-start'>
        //             <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
        //             <textarea cols={30} rows={10}
        //                 value={taskDesc}
        //                 onChange={(e) => { setTaskdesc(e.target.value) }}
        //                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
        //             <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-4/5'>Create Task</button>
        //         </div>

        //     </form>
        // </div>


         <div className="p-6 sm:p-8 bg-[#1C1C1C] mt-7 rounded-2xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-emerald-600/20">
      <h2 className="text-2xl font-semibold text-emerald-400 mb-6 text-center sm:text-left">
        Create New Task
      </h2>
      <form
        onSubmit={submitHandler}
        className="flex flex-col sm:flex-row flex-wrap w-full gap-6 sm:gap-10"
      >
        {/* Left Section */}
        <div className="flex-1 min-w-[250px]">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full text-sm py-2 px-3 rounded-lg bg-transparent border border-gray-500 text-gray-100 outline-none focus:border-emerald-400 transition-all"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full text-sm py-2 px-3 rounded-lg bg-transparent border border-gray-500 text-gray-100 outline-none focus:border-emerald-400 transition-all"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
            <input
              type="text"
              placeholder="Employee name"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full text-sm py-2 px-3 rounded-lg bg-transparent border border-gray-500 text-gray-100 outline-none focus:border-emerald-400 transition-all"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              type="text"
              placeholder="Design"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full text-sm py-2 px-3 rounded-lg bg-transparent border border-gray-500 text-gray-100 outline-none focus:border-emerald-400 transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 min-w-[250px] flex flex-col justify-between">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
            <textarea
              cols={30}
              rows={8}
              value={taskDesc}
              onChange={(e) => setTaskdesc(e.target.value)}
              placeholder="Describe the task..."
              className="w-full text-sm py-2 px-3 rounded-lg bg-transparent border border-gray-500 text-gray-100 outline-none focus:border-emerald-400 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm py-3 mt-5 rounded-full transition-all duration-200 shadow-md hover:shadow-emerald-500/40"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>

    )
}

export default CreateTask
