import React from 'react'
import Header from './Header'
import logo from './assets/task-logo.svg'

export default function HomePage() {
  return (
    <>
      <Header/>

      <div className="container text-white">
      <div className="grid grid-cols-2 gap-4">
        <div className='flex justify-center pt-10'>
          <img src={logo} alt="image" className='mx-auto mt-10 img-fluid h-96' />
        </div>
        <div className='pt-10 text-center'>
        <h1 className='pt-10 text-3xl font-bold text-center'>Welcome, Task Manager App</h1>

        <ul className='pt-10 mt-5 text-xl list-none'>
          <li className='mt-5'>
            <button type="button" className="text-white w-80 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"><i className="bi bi-cloud-plus"></i> Create Task</button>
          </li>
          <li className='mt-5'>
            <button type="button" className="text-white w-80 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"><i className="bi bi-file-earmark-spreadsheet"></i> Read Task</button>
          </li>
          <li className='mt-5'>
            <button type="button" className="text-white w-80 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"><i className="bi bi-pencil-square"></i> Update Task</button>
          </li>
          <li className='mt-5'>
          <button type="button" className="text-white w-80 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"><i className="bi bi-trash3-fill"></i> Delete Task</button>
          </li>
        </ul>

        </div>
      </div>
        

        
      </div>
    </>
  )
}
