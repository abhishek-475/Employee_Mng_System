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

    const submitHandler = (e) => {
        e.preventDefault();



        setNewTask({ taskTitle, taskDescription: taskDesc, taskDate, category, assignTo, active: false, newTask: true, failed: false, completed: false })


        userData.forEach(function (ele) {
            if (assignTo == ele.firstName) {
                ele.tasks.push(newTask)
                ele.taskCounts.newTask += 1;

            }
        })
        setUserData(userData)
        console.log(userData);



        setTaskTitle('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
        setTaskdesc('')
    }

    return (

        <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
            <form onSubmit={(e) => { submitHandler(e) }}
                className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm  text-gray-400 mb-0.5'>Task title</h3>
                        <input type="text" placeholder='Make a UI'
                            value={taskTitle}
                            onChange={(e) => { setTaskTitle(e.target.value) }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input type="date"
                            value={taskDate}
                            onChange={(e) => { setTaskDate(e.target.value) }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        />
                    </div>
                    <div>

                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input type="text" name="" id="" placeholder='employee name'
                            value={assignTo}
                            onChange={(e) => { setAssignTo(e.target.value) }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        />
                    </div>
                    <div>

                        <h3 className='text-sm text-gray-300 mb-0.5'>category</h3>
                        <input type="text" name="" id="" placeholder=' design'
                            value={category}
                            onChange={(e) => { setCategory(e.target.value) }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        />
                    </div>
                </div>


                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea cols={30} rows={10}
                        value={taskDesc}
                        onChange={(e) => { setTaskdesc(e.target.value) }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-4/5'>Create Task</button>
                </div>

            </form>
        </div>


    )
}

export default CreateTask
