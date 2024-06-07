import React from 'react'
import {Link} from 'react-router-dom'

export default function Que3() {
  return (
    <div>
        <div className="container p-5 shadow bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <h1 className='text-3xl font-bold text-center'>3. What is Role of Node Js in react Js?</h1>
        </div>

        {/* answer */}
        <div className="container w-8/12 mx-auto mt-10">
            <p className='text-2xl'>
            &#10149; React.js is a front-end library used for building user interfaces, Node.js is a back-end JavaScript runtime environment.  <br />
            &#10149; Role of Node.js in React.js Development:
            <ul className='ms-10 ps-5'>
              <li>1. Development Environment Setup:</li>
              <li>2. Development Server:</li>
              <li>3. Build Tools:</li>
              <li>4. Server-Side Rendering</li>
              <li>5. APIs and Backend Integration:</li>
              <li>6. Deployment:</li>
            </ul>

            </p>

            <div className="flex justify-between my-10 ">
              <Link to="/que-2">
                <button class="relative inline-flex w-40 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span class="relative px-5 w-40 inline-block py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Previews
                  </span> 
                </button>
              </Link>
              <Link to="/que-4">
                <button class="relative inline-flex w-40 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span class="relative px-5 w-40 inline-block py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Next
                  </span> 
                </button>
              </Link>
            </div>
        </div>
    </div>
  )
}
