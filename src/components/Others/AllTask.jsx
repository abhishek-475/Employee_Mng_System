import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)


  return (


    <div className="bg-[#121212] p-6 sm:p-8 mt-6 rounded-2xl shadow-xl border border-emerald-700/30 hover:shadow-emerald-500/20 transition-all duration-300">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 mb-8 text-center sm:text-left">
        Employee Task Overview
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm sm:text-base border-collapse rounded-lg overflow-hidden">
          {/* Header */}
          <thead>
            <tr className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 text-white shadow-md">
              <th className="py-3 px-4 text-left font-semibold uppercase tracking-wide">
                Employee Name
              </th>
              <th className="py-3 px-4 text-center font-semibold uppercase tracking-wide">
                New Task
              </th>
              <th className="py-3 px-4 text-center font-semibold uppercase tracking-wide">
                Active Task
              </th>
              <th className="py-3 px-4 text-center font-semibold uppercase tracking-wide">
                Completed
              </th>
              <th className="py-3 px-4 text-center font-semibold uppercase tracking-wide">
                Failed
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {userData?.length > 0 ? (
              userData.map((ele, idx) => (
                <tr
                  key={idx}
                  className={`transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-emerald-600/20 ${idx % 2 === 0 ? "bg-[#1E1E1E]" : "bg-[#242424]"
                    }`}
                >
                  <td className="py-4 px-4 font-medium text-emerald-300">
                    {ele.firstName}
                  </td>
                  <td className="py-4 px-4 text-center font-semibold text-blue-400">
                    {ele.taskCounts.newTask}
                  </td>
                  <td className="py-4 px-4 text-center font-semibold text-yellow-400">
                    {ele.taskCounts.active}
                  </td>
                  <td className="py-4 px-4 text-center font-semibold text-green-400">
                    {ele.taskCounts.completed}
                  </td>
                  <td className="py-4 px-4 text-center font-semibold text-red-500">
                    {ele.taskCounts.failed}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="py-6 text-center text-gray-400 italic bg-[#1E1E1E]"
                >
                  No employee data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllTask
