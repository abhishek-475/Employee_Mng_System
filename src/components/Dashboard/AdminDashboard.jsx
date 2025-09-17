import React from 'react'
import Header from '../Others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />


      <div>
        <form className='flex items-start justify-between'>
            <div>
            <h3>Task title</h3>
            <input type="text" placeholder='Make a UI' />
            </div>

            <div>
            <h3>Description</h3>
            <textarea name="" id="" cols={30} rows={10}></textarea>
            </div>
            <div>
            <h3>Date</h3>
            <input type="date" />
            </div>
            <div>

            <h3>Assign to</h3>
            <input type="text" name="" id=""  placeholder='employee name'/>
            </div>
            <div>

            <h3>category</h3>
            <input type="text" name="" id=""  placeholder=' design'/>
            </div>
            <button>Create Task</button>
        </form>
      </div>


    </div>
  )
}

export default AdminDashboard
