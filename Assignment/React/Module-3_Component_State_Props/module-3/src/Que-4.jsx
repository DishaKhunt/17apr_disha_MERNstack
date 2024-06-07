import React from 'react'
import {Link} from 'react-router-dom'

export default function Que4() {
  return (
    <div>
        <div className="container p-5 shadow bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <h1 className='text-3xl font-bold text-center'>4. What is CLI command In React Js? </h1>
        </div>

        <div className="container w-8/12 mx-auto mt-10">
            <p className='text-2xl'>
            &#10149; CLI Stands for Command Line Interface <br />
            &#10149; A command-line interface is a computer program that processes commands in the form of text inputs and in turn execute system functions. <br />

            &#10149; Common React.js CLI Commands:
            <ul className='ms-10'>
              <li className='font-bold'>1. Creating a New React Application: <br />
                <span className='font-normal ms-5'>npx create-react-app my-app</span>
              </li>
              <li className='font-bold'>2. Navigating into the Project Directory: <br />
                <span className='font-normal ms-5'>cd my-app</span>
              </li>
              <li className='font-bold'>3. Installing Dependencies: <br />
                <span className='font-normal ms-5'>npm install</span>
              </li>
              <li></li>
              <li></li>
            </ul>
            </p>

            <div className="flex justify-between my-10 ">
              <Link to="/que-3">
                <button class="relative inline-flex w-40 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span class="relative px-5 w-40 inline-block py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Previews
                  </span> 
                </button>
              </Link>
              <Link to="/que-5">
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
